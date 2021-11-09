import { AuthMiddleware } from '@/presentation/middlewares/auth/auth-middleware'
import { Middleware } from '@/presentation/protocols'
import { makeDbLoadAccountByToken } from '../usecases/account/db-find-account-by-token-factory'

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
