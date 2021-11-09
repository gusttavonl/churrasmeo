import { AddAccountParams } from '@/domain/usescasses/account/add-account'

export const makeAccount = (): AddAccountParams => ({
  name: 'xxxxxx',
  email: 'any_email2@email.com',
  password: 'any_password'
})
