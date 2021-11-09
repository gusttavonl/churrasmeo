import { FindAllParticipantsRepository } from '@/data/protocols/db/participants/find-all-participants-repository'
import { ParticipantsModel } from '@/domain/models/participants'
import { FindAllParticipants } from '@/domain/usescasses/participants/find-all-participants'

export class DbFindAllParticipants implements FindAllParticipants {
  constructor (
    private readonly findAllParticipantsRepository: FindAllParticipantsRepository
  ) {}

  async findAll (accountId): Promise<ParticipantsModel[]> {
    const barbacues = await this.findAllParticipantsRepository.findAll(accountId)

    return barbacues
  }
}
