import { AccountModel } from '@/domain/models/account'

export const makeAccountModel = (): AccountModel => ({
  id: 'any_account_model',
  name: 'any_account_name',
  email: 'any_account_email',
  password: 'any_account_password',
  created_at: new Date(),
  updated_at: new Date()
})
