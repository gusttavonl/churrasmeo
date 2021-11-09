import { UpdateAccountRepository } from '@/data/protocols/db/account/update-account-repository'
import { UpdateAccount, UpdateAccountParams } from '@/domain/usescasses/account/update-account'
import { Hasher } from '../authentication/db-authentication-protocols'

export class DbUpdateAccount implements UpdateAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly updateAccountRepository: UpdateAccountRepository
  ) {}

  async update (accountId: string, accountData: UpdateAccountParams): Promise<number> {
    const hashedPassword = await this.hasher.hash(accountData.password)
    const affected = await this.updateAccountRepository.update(accountId, { ...accountData, password: hashedPassword })
    return affected
  }
}
