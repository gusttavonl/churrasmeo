import { UpdateAccountParams } from '@/domain/usescasses/account/update-account'

export interface UpdateAccountRepository {
  update: (accountId: string, accountData: UpdateAccountParams) => Promise<number>
}
