import { RemoveAccountRepository } from '@/data/protocols/db/account/remove-account-repository'
import { RemoveAccount } from '@/domain/usescasses/account/remove-account'

export class DbRemoveAccount implements RemoveAccount {
  constructor (
    private readonly removeAccountRepository: RemoveAccountRepository
  ) {}

  async remove (accountId: string): Promise<number> {
    const affected = await this.removeAccountRepository.remove(accountId)

    return affected
  }
}
