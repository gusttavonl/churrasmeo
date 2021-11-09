import { RemoveAccount } from '@/domain/usescasses/account/remove-account'
import { DbRemoveAccount } from '@/data/usescases/account/db-remove-account'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbRemoveAccount = (): RemoveAccount => {
  const accountRepository = new AccountRepository()
  return new DbRemoveAccount(accountRepository)
}
