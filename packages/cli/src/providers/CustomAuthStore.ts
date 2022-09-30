import { mkdirSync, readFile, readFileSync, writeFileSync } from 'fs'
import { homedir } from 'os'
import { dirname, join } from 'path'
import { Admin, BaseAuthStore, User } from 'pocketbase'
import { promisify } from 'util'

const pReadFile = promisify(readFile)

export interface SerializeOptions {
  encode?: (val: string | number | boolean) => string
  maxAge?: number
  domain?: string
  path?: string
  expires?: Date
  httpOnly?: boolean
  secure?: boolean
  priority?: string
  sameSite?: boolean | string
}

type SessionConfig = {
  [host: string]: { token: string; model: User | Admin | null }
}

export class CustomAuthStore extends BaseAuthStore {
  _host: string
  _fname: string

  constructor(host: string, project: string) {
    super()
    this._fname = join(homedir(), `.pbscript/${project}`)
    mkdirSync(dirname(this._fname), { recursive: true })
    this._host = host
    this.baseToken = ''
    this.baseModel = null
    this._loadSessionConfig()
  }
  _loadSessionConfig() {
    try {
      const json = readFileSync(this._fname).toString()
      // console.log(`json`, json)
      const data = JSON.parse(json) as SessionConfig
      // console.log(`data`, { data })
      this.baseToken = data?.[this._host]?.token || ''
      this.baseModel = data?.[this._host]?.model || null
    } catch (e) {
      console.warn(`No session file found at ${this._fname}`)
    }
  }
  get get() {
    // console.log(`Get token`)
    return this.baseToken
  }
  get model(): User | Admin | null {
    // console.log(`get model`)
    return this.baseModel
  }
  get isValid(): boolean {
    // console.log(`isValid`)
    return !!this.baseToken
  }
  _readSessionConfig(): SessionConfig {
    try {
      const json = readFileSync(this._fname).toString()
      // console.log(`json`, json)
      const data = JSON.parse(json)
      // console.log(`data`, data)
      return data
    } catch (e) {
      console.error(`Error writing config, ${e}`)
    }
    return {}
  }
  save(token: string, model: User | Admin | null) {
    try {
      const project = this._readSessionConfig()
      project[this._host] = { token, model }
      writeFileSync(this._fname, JSON.stringify(project, null, 2))
    } catch (e) {
      console.error(`Error writing config, ${e}`)
    }
    // console.log(`saving`, { token, model })
    // super.save(token, model)
    // your custom business logic...
  }
  clear(): void {
    console.log(`clear`)
    try {
      const project = this._readSessionConfig()
      delete project[this._host]
      writeFileSync(this._fname, JSON.stringify(project, null, 2))
    } catch (e) {
      console.error(`Error writing config, ${e}`)
    }
  }
  loadFromCookie(cookie: string, key?: string | undefined): void {
    throw new Error(`Unsuported loadFromCookie`)
  }
  exportToCookie(
    options?: SerializeOptions | undefined,
    key?: string | undefined
  ): string {
    throw new Error(`Unsupported exportToCookie`)
  }
}
