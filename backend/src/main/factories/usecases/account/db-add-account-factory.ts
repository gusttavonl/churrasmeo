import { AddAccount } from '@/domain/usescasses/account/add-account'
import { DbAddAccount } from '@/data/usescases/account/db-add-account'
import { BcryptAdapter } from '@/infra/cryptography/brcrypt-adapter/bcrypt-adapter'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'

export const makeDbAddAccount = (): AddAccount => {
  const salt = 12
  const hasher = new BcryptAdapter(salt)
  const accountRepository = new AccountRepository()
  return new DbAddAccount(hasher, accountRepository)
}
