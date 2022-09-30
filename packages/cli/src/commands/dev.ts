import { Parcel } from '@parcel/core'
import { debounce } from '@s-libs/micro-dash'
import chokidar from 'chokidar'
import { Command } from 'commander'
import { join } from 'path'
import { cwd } from 'process'
import tmp from 'tmp'
import { DEFAULT_PB_DEV_URL } from '../constants'
import { die } from '../util/die'
import { getProjectRoot } from '../util/getProjectConfig'
import { pbClient } from '../util/pbClient'

export const addDevCommand = (program: Command) => {
  program
    .command('dev')
    .description('Watch for source code changes in development mode')
    .option('--host', 'PocketBase host', DEFAULT_PB_DEV_URL)
    .action(async (options) => {
      const { host } = options

      const client = pbClient(host)
      if (!client.authStore.isValid) {
        die(
          `Must be logged in to PocketBase as an admin. Use 'pbscript login' first.`
        )
      }

      const distDir = tmp.dirSync().name
      console.log(cwd())

      const bundler = new Parcel({
        entries: './src/index.ts',
        defaultConfig: '@parcel/config-default',
        mode: 'production',
        defaultTargetOptions: {
          distDir: join(cwd(), 'dist'),
          outputFormat: 'global',
          sourceMaps: false,
        },
        shouldDisableCache: true,
        // targets: {
        //   iife: {
        //     distDir: './dist',
        //     source: './src/index.ts',
        //     context: 'browser',
        //     outputFormat: 'global',
        //     sourceMap: {
        //       inline: true,
        //     },
        //   },
        // },
      })

      const build = debounce(() => {
        console.log(`Building...`)
        bundler
          .run()
          .then((e) => {
            console.log(`Build succeeded`, e)
            console.log(e.bundleGraph.getBundles({ includeInline: true }))
            let { bundleGraph } = e
          })
          .catch((e) => {
            console.error(`Build failed with ${e}`)
          })
      }, 100)

      build()
      console.log(join(getProjectRoot(), 'src/**'))
      chokidar
        .watch([
          join(getProjectRoot(), 'src/**'),
          join(getProjectRoot(), 'node_modules/**'),
        ])
        .on('all', (event, path) => {
          build()
        })

      console.log('here')
    })
}
