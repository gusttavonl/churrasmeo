import { AccountModelResponse } from '@/domain/models/account'

export interface FindAccountByToken {
  find: (accessToken: string) => Promise<AccountModelResponse>
}
