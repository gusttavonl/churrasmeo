import { ParticipantsRepository } from '@/infra/db/postgres/modules/participants/participants-repository'
import { DbFindParticipantsById } from '@/data/usescases/participants/db-find-participants-by-id'
import { FindParticipantsById } from '@/domain/usescasses/participants/find-participants-by-id'

export const makeDbFindParticipantsById = (): FindParticipantsById => {
  const participantsRepository = new ParticipantsRepository()
  return new DbFindParticipantsById(participantsRepository)
}
