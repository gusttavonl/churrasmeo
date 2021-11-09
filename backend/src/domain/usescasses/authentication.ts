export interface AddAccountsParams {
  email: string
  password: string
}

export interface AccountResponse {
  id: string
  name: string
  email: string
}

export interface AuthResponse {
  user: AccountResponse
  accessToken: string
}

export interface Authentication {
  auth: (authentication: AddAccountsParams) => Promise<AuthResponse>
}
