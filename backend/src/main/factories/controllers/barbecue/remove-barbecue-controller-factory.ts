import { RemoveBarbecueController } from '@/presentation/controllers/barbecue/remove-barbecue-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbRemoveBarbecue } from '../../usecases/barbacue/db-remove-barbecue-factory'
import { makeRemoveBarbecueValidation } from './barbecue-validation/remove-barbecue-validation-factory'

export const makeRemoveBarbecueController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const barbecueController = new RemoveBarbecueController(makeDbRemoveBarbecue(), makeRemoveBarbecueValidation(), erroHandler)
  return barbecueController
}
