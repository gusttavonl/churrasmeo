import { Controller } from '@/presentation/protocols'
import { FindBarbecueByIdController } from '@/presentation/controllers/barbecue/find-barbecue-by-id-controller'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbFindBarbecueById } from '../../usecases/barbacue/db-find-barbecue-by-id-factory'

export const makeFindBarbecueByIdController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const barbecueController = new FindBarbecueByIdController(makeDbFindBarbecueById(), erroHandler)
  return barbecueController
}
