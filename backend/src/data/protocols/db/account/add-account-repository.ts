import { AccountModelResponse } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usescasses/account/add-account'

export interface AddAccountRepository {
  add: (accountData: AddAccountParams) => Promise<AccountModelResponse>
}
