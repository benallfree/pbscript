import { SqlResult } from './Sql'

export type DbxQuery = {
  // https://pkg.go.dev/github.com/pocketbase/dbx#Query
  // https://pkg.go.dev/github.com/pocketbase/dbx#Query.Execute
  execute: () => SqlResult
}

export type DbxBuilder = {
  // https://pkg.go.dev/github.com/pocketbase/dbx#Builder
  newQuery: (sql: string) => DbxQuery
}
