export interface AccountModel {
  id?: string
  name: string
  email: string
  password: string
  created_at?: Date
  updated_at?: Date
}

export type AccountModelResponse = Omit<AccountModel, 'password'>
