export * from './types'
import { PBScriptApi } from './types'

const api: PBScriptApi = {
  ping: () => 'Hello from PBScript!',
}

registerJsFuncs(api)
