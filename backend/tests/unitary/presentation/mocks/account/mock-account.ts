import { AccountModelResponse } from '@/domain/models/account'
import { AddAccount, AddAccountParams } from '@/domain/usescasses/account/add-account'

export const makeDbAddAccount = (): AddAccount => {
  class AddAccountStub implements AddAccount {
    async add (account: AddAccountParams): Promise<AccountModelResponse> {
      return await new Promise(resolve => resolve(account))
    }
  }
  return new AddAccountStub()
}
