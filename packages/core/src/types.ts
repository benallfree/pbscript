export enum EchoHttpMethods {
  Get = 'GET',
}

export enum HttpResponseStatuses {
  Ok = 200,
}

export type PackedData = string
export type PingResult = string
export type PBScriptApi = {
  ping: () => PingResult
  // fireEvent: (eventName: NativePocketBaseEvents) => void
  // exec: TokenizedFunctionExecutor
}

export type HttpResponse = {
  json: (status: HttpResponseStatuses, data: object) => void
}
export type EchoHttpHandler = (context: any) => void

export type EchoMiddlewareFunc = (next: EchoHandlerFunc) => EchoHandlerFunc

export type EchoHandlerFunc = (context: EchoContext) => void

export type EchoContext = any

export type EchoRoute = {
  method: EchoHttpMethods
  path: string
  handler: EchoHttpHandler
  middlewares: EchoMiddlewareFunc[]
}

declare global {
  function registerJsFuncs(api: PBScriptApi): void
  let __go: {
    app: any
    addRoute: (route: EchoRoute) => void
    ping: () => string
    onModelBeforeCreate: any
    requireAdminAuth: () => EchoMiddlewareFunc
    requireAdminAuthOnlyIfAny: () => EchoMiddlewareFunc
    requireAdminOrOwnerAuth: () => EchoMiddlewareFunc
    requireAdminOrUserAuth: () => EchoMiddlewareFunc
  }
}
