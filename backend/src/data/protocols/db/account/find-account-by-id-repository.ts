import { AccountModelResponse } from '@/data/usescases/account/db-accounts-protocols'

export interface FindAccountByIdRepository {
  findById: (id: string) => Promise<AccountModelResponse>
}
