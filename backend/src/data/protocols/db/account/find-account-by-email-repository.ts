import { AccountModel } from '@/data/usescases/account/db-accounts-protocols'

export interface FindAccountByEmailRepository {
  findByEmail: (email: string) => Promise<AccountModel>
}
