import { RemoveAccountController } from '@/presentation/controllers/account/remove-account-controller'
import { Controller } from '@/presentation/protocols'
import { makeRemoveAccountValidation } from './account-validation/remove-account-validation-factory'
import { makeDbRemoveAccount } from '@/main/factories/usecases/account/db-remove-account-factory'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'

export const makeRemoveAccountController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const accountController = new RemoveAccountController(makeDbRemoveAccount(), makeRemoveAccountValidation(), erroHandler)
  return accountController
}
