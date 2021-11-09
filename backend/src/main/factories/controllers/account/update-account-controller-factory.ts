import { UpdateAccountController } from '@/presentation/controllers/account/update-account-controller'
import { Controller } from '@/presentation/protocols'
import { makeUpdateAccountValidation } from './account-validation/update-account-validation-factory'
import { makeDbUpdateAccount } from '@/main/factories/usecases/account/db-update-account-factory'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'

export const makeUpdateAccountController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const accountController = new UpdateAccountController(makeDbUpdateAccount(), makeUpdateAccountValidation(), erroHandler)
  return accountController
}
