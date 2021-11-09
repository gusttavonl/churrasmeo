import { UpdateBarbecueController } from '@/presentation/controllers/barbecue/update-barbecue-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbUpdateBarbecue } from '../../usecases/barbacue/db-update-barbecue-factory'
import { makeUpdateBarbecueValidation } from './barbecue-validation/update-barbecue-validation-factory'

export const makeUpdateBarbecueController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const barbecueController = new UpdateBarbecueController(makeDbUpdateBarbecue(), makeUpdateBarbecueValidation(), erroHandler)
  return barbecueController
}
