import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'
import { FindAccountById } from '@/domain/usescasses/account/find-account-by-id'
import { DbFindAccountById } from '@/data/usescases/account/db-find-account-by-id'

export const makeDbFindAccountById = (): FindAccountById => {
  const accountRepository = new AccountRepository()
  return new DbFindAccountById(accountRepository)
}
