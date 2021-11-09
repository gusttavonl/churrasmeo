import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { AddAccount, AccountModelResponse, AddAccountParams,Hasher } from './db-accounts-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly hasher: Hasher,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (accountData: AddAccountParams): Promise<AccountModelResponse> {
    const hashedPassword = await this.hasher.hash(accountData.password)
    const account = await this.addAccountRepository.add(Object.assign({}, accountData, { password: hashedPassword }))
    return account
  }
}
