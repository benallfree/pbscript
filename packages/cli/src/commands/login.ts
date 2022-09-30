import { Command } from 'commander'
import { DEFAULT_PB_DEV_URL } from '../constants'
import { die } from '../util/die'
import { pbClient } from '../util/pbClient'

export const addLoginCommand = (program: Command) => {
  program
    .command('login')
    .description('Login to a PocketBase instance')
    .argument('<login>', 'Username')
    .argument('<password>', 'Password')
    .option('--host', 'PocketBase host', DEFAULT_PB_DEV_URL)
    .action(async (username, password, options) => {
      const { host } = options
      const client = pbClient(host)
      client.admins
        .authViaEmail(username, password)
        .then((res) => {
          console.log(`Successfully logged in as ${username} for project `)
        })
        .catch((e) => {
          die(`Login failed: ${e}`)
        })
    })
}
