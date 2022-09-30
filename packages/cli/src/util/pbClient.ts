import PocketBase from 'pocketbase'
import { CustomAuthStore } from '../providers/CustomAuthStore'
import { assertExists } from './assert'
import { die } from './die'
import { getProjectConfig } from './getProjectConfig'

export const pbClient = (host: string) => {
  const { project } = getProjectConfig()
  const client = new PocketBase(
    host,
    'en-US',
    new CustomAuthStore(host, project)
  )
  return client
}

export const adminPbClient = async (host: string) => {
  const client = pbClient(host)
  if (!client.authStore.isValid) {
    die(
      `Must be logged in to PocketBase as an admin. Use 'pbscript login' first.`
    )
  }
  const { model } = client.authStore
  assertExists(model, `Expected a valid model here`)
  const res = await client.admins.getOne(model.id)
  if (!res) {
    die(`User must be an admin user.`)
  }
  return client
}
