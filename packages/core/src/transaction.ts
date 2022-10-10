export type TransactionApi = {
  execute: (sql: string) => void
}

export type TransactionCallback = (api: TransactionApi) => void

export const runInTransaction = (cb: TransactionCallback) => {
  __go.app.dao().runInTransaction((txDao) => {
    const execute = (sql: string) => {
      const q = txDao.dB().newQuery(sql)
      return q.execute()
    }
    const api: TransactionApi = {
      execute,
    }
    cb(api)
  })
}
