export * from './types'
import { EchoRoute, PBScriptApi } from './types'

const api: PBScriptApi = {
  ping: () => 'Hello from PBScript!',
}

registerJsFuncs(api)

export const addRoute = (route: EchoRoute) => __go.addRoute(route)
