import '@pbscript/core'
import { HttpMethods } from '@pbscript/core'

console.log(`Adding route from JS`)
__go.addRoute({
  method: HttpMethods.Get,
  path: `/api/js`,
  handler: (c) => {
    c.string(200, `Hello from JS`)
  },
  middlewares: [],
})

__go.app.onModelBeforeCreate().add((e: any) => {
  console.log(`***1 a model was updated in JS!`, Object.keys(e))
})
