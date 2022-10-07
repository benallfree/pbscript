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

__go.onModelBeforeCreate((e: any) => {
  console.log(`***7 a model was updated in JS!`, Object.keys(e))
})
