import { DbAddParticipants } from '@/data/usescases/participants/db-add-participants'
import { AddParticipants } from '@/domain/usescasses/participants/add-participants'
import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'
import { ParticipantsRepository } from '@/infra/db/postgres/modules/participants/participants-repository'

export const makeDbAddParticipants = (): AddParticipants => {
  const participantsRepository = new ParticipantsRepository()
  const barbecueRepository = new BarbecueRepository()
  return new DbAddParticipants(participantsRepository, barbecueRepository, barbecueRepository)
}
