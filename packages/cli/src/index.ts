import { program } from 'commander'

declare global {
  let __go_app: any
}

import 'cross-fetch/polyfill'
import 'eventsource'
import { addDeployCommand } from './commands/deploy'
import { addLoginCommand } from './commands/login'
import { getProjectRoot } from './util/getProjectConfig'

console.log(`PBScript 0.0.1 running from ${getProjectRoot()}`)

program
  .name('pbscript')
  .description('CLI for JavaScript extensions for PocketBase ')
  .version('0.0.1')
addLoginCommand(program)
addDeployCommand(program)
// addDevCommand(program)

program.parse()
