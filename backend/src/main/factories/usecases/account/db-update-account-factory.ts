import { UpdateAccount } from '@/domain/usescasses/account/update-account'
import { DbUpdateAccount } from '@/data/usescases/account/db-update-account'
import { AccountRepository } from '@/infra/db/postgres/modules/account/account-repository'
import { BcryptAdapter } from '@/infra/cryptography/brcrypt-adapter/bcrypt-adapter'

export const makeDbUpdateAccount = (): UpdateAccount => {
  const salt = 12
  const hasher = new BcryptAdapter(salt)
  const accountRepository = new AccountRepository()
  return new DbUpdateAccount(hasher, accountRepository)
}
