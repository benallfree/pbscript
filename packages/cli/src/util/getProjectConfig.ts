import { findUpSync } from 'find-up'
import { readFileSync } from 'fs'
import { dirname, join } from 'path'
import { die } from './die'

export type ProjectConfig = {
  project: string
}

export const getProjectRoot = () => {
  const root = findUpSync(`.pbscriptconfig`)
  if (!root) {
    die(
      `PBScript must be run from inside a PBScript project. Run 'pbscript init' in an existing project to get started.`
    )
  }
  return dirname(root)
}

export const getProjectConfig = () => {
  const configBase = join(getProjectRoot(), '.pbscriptconfig')
  if (!configBase) {
    throw new Error(`Not found`)
  }
  const json = readFileSync(configBase).toString()
  const data = JSON.parse(json) as ProjectConfig
  return data
}
