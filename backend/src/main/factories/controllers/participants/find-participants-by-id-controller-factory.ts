import { Controller } from '@/presentation/protocols'
import { FindParticipantsByIdController } from '@/presentation/controllers/participants/find-participants-by-id-controller'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbFindParticipantsById } from '../../usecases/participants/db-find-participantes-by-id-factory'

export const makeFindParticipantsByIdController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const participantsController = new FindParticipantsByIdController(makeDbFindParticipantsById(), erroHandler)
  return participantsController
}
