import { FindAllBarbecueController } from '@/presentation/controllers/barbecue/find-all-barbecue-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbFindAllBarbecue } from '../../usecases/barbacue/db-find-all-barbecue'

export const makeFindAllBarbecueController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const barbecueController = new FindAllBarbecueController(makeDbFindAllBarbecue(), erroHandler)
  return barbecueController
}
