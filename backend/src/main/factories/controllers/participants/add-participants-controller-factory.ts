import { AddParticipantsController } from '@/presentation/controllers/participants/add-participants-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbAddParticipants } from '../../usecases/participants/db-add-participantes-factory'
import { makeParticipantsValidation } from './participants-validation/participants-validation-factory'

export const makeAddParticipantsController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const participantsController = new AddParticipantsController(makeDbAddParticipants(), makeParticipantsValidation(), erroHandler)
  return participantsController
}
