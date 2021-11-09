import { FindAccountById } from '@/domain/usescasses/account/find-account-by-id'
import { FindAccountByIdRepository } from '@/data/protocols/db/account/find-account-by-id-repository'
import { AccountModelResponse } from '@/data/usescases/account/db-accounts-protocols'

export class DbFindAccountById implements FindAccountById {
  constructor (
    private readonly findAccountByIdRepository: FindAccountByIdRepository
  ) {}

  async findById (id: string): Promise<AccountModelResponse> {
    const accountsIdResponse = await this.findAccountByIdRepository.findById(id)

    return accountsIdResponse
  }
}
