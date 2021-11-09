import { AddAccountsParams, Authentication, AuthResponse } from '@/domain/usescasses/authentication'
import { makeAuthResponse } from '@/tests/unitary/domain/mocks/auth/auth'

export const makeLoginStub = (): Authentication => {
  class LoginStub implements Authentication {
    async auth (authentication: AddAccountsParams): Promise<AuthResponse> {
      return await new Promise(resolve => resolve(makeAuthResponse()))
    }
  }
  return new LoginStub()
}
