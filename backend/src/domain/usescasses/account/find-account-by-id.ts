import { AccountModelResponse } from '@/data/usescases/account/db-accounts-protocols'

export interface FindAccountById {
  findById: (id: string) => Promise<AccountModelResponse>
}
