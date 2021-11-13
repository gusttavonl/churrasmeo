import { FindBarbecueByIdRepository } from '@/data/protocols/db/barbecue/find-barbecue-by-id-repository'
import { UpdateBarbecueRepository } from '@/data/protocols/db/barbecue/update-barbecue-repository'
import { FindParticipantsByIdRepository } from '@/data/protocols/db/participants/find-participants-by-id-repository'
import { RemoveParticipantsRepository } from '@/data/protocols/db/participants/remove-participants-repository'
import { RemoveParticipants } from '@/domain/usescasses/participants/remove-participants'

export class DbRemoveParticipants implements RemoveParticipants {
  constructor (
    private readonly removeParticipantsRepository: RemoveParticipantsRepository,
    private readonly findParticipantsByidRepository: FindParticipantsByIdRepository,
    private readonly findBarbecueByIdRepository: FindBarbecueByIdRepository,
    private readonly updateBarbecueRepository: UpdateBarbecueRepository
  ) {}

  async remove (id: string): Promise<number> {
    const participant = await this.findParticipantsByidRepository.findById(id)
    const barbacue = await this.findBarbecueByIdRepository.findById(participant.barbecue.id)

    const subtractValueParticipantToBarbecueValueTotal = barbacue.value - participant.value

    const barbacueUpdateObject = { value: subtractValueParticipantToBarbecueValueTotal, ...barbacue }

    const affected = await this.removeParticipantsRepository.remove(id)
    await this.updateBarbecueRepository.update(barbacue.id, barbacueUpdateObject)

    return affected
  }
}
