import { RemoveParticipantsController } from '@/presentation/controllers/participants/remove-participants-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbRemoveParticipants } from '../../usecases/participants/db-remove-participantes-factory'
import { makeRemoveParticipantsValidation } from './participants-validation/remove-participants-validation-factory'

export const makeRemoveParticipantsController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const participantsController = new RemoveParticipantsController(makeDbRemoveParticipants(), makeRemoveParticipantsValidation(), erroHandler)
  return participantsController
}
