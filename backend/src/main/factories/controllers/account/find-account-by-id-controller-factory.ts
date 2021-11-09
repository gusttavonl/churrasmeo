import { Controller } from '@/presentation/protocols'
import { FindAccountByIdController } from '@/presentation/controllers/account/find-account-by-id-controller'
import { makeDbFindAccountById } from '../../usecases/account/db-find-account-by-id-factory'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'

export const makeFindAccountByIdController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const accountController = new FindAccountByIdController(makeDbFindAccountById(), erroHandler)
  return accountController
}
