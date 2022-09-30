import { Command } from 'commander'
import { existsSync, readFileSync } from 'fs'
import { join } from 'path'
import pocketbaseEs from 'pocketbase'
import { DEFAULT_PB_DEV_URL } from '../constants'
import { die } from '../util/die'
import { getProjectRoot } from '../util/getProjectConfig'
import { adminPbClient } from '../util/pbClient'

const migrate = async (client: pocketbaseEs) => {
  {
    // VERSION 1
    const res = await client.collections.getList(1, 1, {
      filter: `name='pbscript'`,
    })
    const [item] = res.items
    if (!item) {
      await client.collections.create({
        name: 'pbscript',
        schema: [
          {
            name: 'type',
            type: 'text',
            required: true,
          },
          {
            name: 'isActive',
            type: 'bool',
          },
          {
            name: 'data',
            type: 'json',
            required: true,
          },
        ],
      })
    }
  }
}

const deploy = async (client: pocketbaseEs, fname: string) => {
  if (!existsSync(fname)) {
    die(`${fname} does not exist. Deployment failed.`)
  }
  const js = readFileSync(fname).toString()
  const url = `${client.baseUrl}/api/pbscript/deploy`
  const res = await client
    .send(`api/pbscript/deploy`, {
      method: 'post',
      body: JSON.stringify({
        source: js,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
    .catch((e) => {
      console.error(e)
      throw e
    })
  console.log({ res })
}

export const addDeployCommand = (program: Command) => {
  const _srcDefault = join(getProjectRoot(), './dist/index.js')
  const _hostDefault = DEFAULT_PB_DEV_URL
  program
    .command('deploy')
    .description('Deploy JS bundle to PBScript-enabled PocketBase instance')
    .option('--src <src>', `Path to bundle`, _srcDefault)
    .option('--host <host>', `PocketBase host`, _hostDefault)
    .action(async (options) => {
      const { host, src } = options

      console.log(`Deploying from ${src} to ${host}`)
      const client = await adminPbClient(host)
      await migrate(client)
      await deploy(client, src)
    })
}
