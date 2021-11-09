import { AddBarbecueController } from '@/presentation/controllers/barbecue/add-barbecue-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbAddBarbecue } from '../../usecases/barbacue/db-add-barbecue-factory'
import { makeBarbecueValidation } from './barbecue-validation/barbecue-validation-factory'

export const makeAddBarbecueController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const barbecueController = new AddBarbecueController(makeDbAddBarbecue(), makeBarbecueValidation(), erroHandler)
  return barbecueController
}
