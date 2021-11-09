
import { FindParticipantsByIdRepository } from '@/data/protocols/db/participants/find-participants-by-id-repository'
import { ParticipantsModel } from '@/domain/models/participants'
import { FindParticipantsById } from '@/domain/usescasses/participants/find-participants-by-id'

export class DbFindParticipantsById implements FindParticipantsById {
  constructor (
    private readonly findParticipantsByIdRepository: FindParticipantsByIdRepository
  ) {}

  async findById (id: string): Promise<ParticipantsModel> {
    const participantssIdResponse = await this.findParticipantsByIdRepository.findById(id)

    return participantssIdResponse
  }
}
