import { DbRemoveParticipants } from '@/data/usescases/participants/db-remove-participants'
import { RemoveParticipants } from '@/domain/usescasses/participants/remove-participants'
import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'
import { ParticipantsRepository } from '@/infra/db/postgres/modules/participants/participants-repository'

export const makeDbRemoveParticipants = (): RemoveParticipants => {
  const participantsRepository = new ParticipantsRepository()
  const barbecueRepository = new BarbecueRepository()
  return new DbRemoveParticipants(participantsRepository, participantsRepository, barbecueRepository, barbecueRepository)
}
