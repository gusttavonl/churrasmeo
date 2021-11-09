import { Controller } from '@/presentation/protocols'
import { LoginController } from '@/presentation/controllers/login/login-controller'
import { makeDbAuthentication } from '@/main/factories/usecases/authentication/db-authentication-factory'
import { makeLoginValidation } from './login-validation/login-validation-factory'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'

export const makeLoginController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const loginController = new LoginController(makeLoginValidation(), makeDbAuthentication(), erroHandler)
  return loginController
}
