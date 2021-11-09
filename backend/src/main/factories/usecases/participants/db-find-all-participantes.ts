import { DbFindAllParticipants } from '@/data/usescases/participants/db-find-all-participants'
import { FindAllParticipants } from '@/domain/usescasses/participants/find-all-participants'
import { ParticipantsRepository } from '@/infra/db/postgres/modules/participants/participants-repository'

export const makeDbFindAllParticipants = (): FindAllParticipants => {
  const participantsRepository = new ParticipantsRepository()
  return new DbFindAllParticipants(participantsRepository)
}
