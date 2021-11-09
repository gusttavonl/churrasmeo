import { FindAllParticipantsController } from '@/presentation/controllers/participants/find-all-participants-controller'
import { Controller } from '@/presentation/protocols'
import { ErroHandlerFactory } from '../../erro/error-handler-factory'
import { makeDbFindAllParticipants } from '../../usecases/participants/db-find-all-participantes'

export const makeFindAllParticipantsController = (): Controller => {
  const erroHandler = new ErroHandlerFactory()
  const participantsController = new FindAllParticipantsController(makeDbFindAllParticipants(), erroHandler)
  return participantsController
}
