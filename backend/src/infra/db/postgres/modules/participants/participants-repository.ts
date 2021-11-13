
import { AddParticipantsRepository } from '@/data/protocols/db/participants/add-participants-repository'
import { FindAllParticipantsRepository } from '@/data/protocols/db/participants/find-all-participants-repository'
import { FindParticipantsByIdRepository } from '@/data/protocols/db/participants/find-participants-by-id-repository'
import { RemoveParticipantsRepository } from '@/data/protocols/db/participants/remove-participants-repository'
import { ParticipantsModel } from '@/domain/models/participants'
import { AddParticipantsParams } from '@/domain/usescasses/participants/add-participants'
import { getRepository } from 'typeorm'
import { ParticipantsEntity } from './participants-entity'

export class ParticipantsRepository implements AddParticipantsRepository, FindAllParticipantsRepository, FindParticipantsByIdRepository, RemoveParticipantsRepository {
  async add (participantsData: AddParticipantsParams): Promise<ParticipantsModel> {
    const participantsEntity = getRepository(ParticipantsEntity)
    const participants = participantsEntity.create(participantsData)

    return await participantsEntity.save(participants)
  }

  async remove (participantsId: string): Promise<number> {
    const participantsEntity = getRepository(ParticipantsEntity)
    const dbResponse = await participantsEntity.delete(participantsId)

    return dbResponse.affected
  }

  async findAll (accountId: string): Promise<ParticipantsModel[]> {
    const participantsEntity = getRepository(ParticipantsEntity)

    const participants = await participantsEntity
      .createQueryBuilder('participants')
      .select([
        'participants.id',
        'participants.name',
        'participants.value',
        'participants.value_suggestion_with_drink',
        'participants.value_suggestion_with_out_drink',
        'participants.date'
      ])
      .leftJoinAndSelect('participants.barbecue', 'barbecue')
      .where('participants.account = :accountId', { accountId: accountId })
      .getMany()

    return participants
  }

  async findById (id: string): Promise<ParticipantsModel> {
    const participantsEntity = getRepository(ParticipantsEntity)
    const participants = await participantsEntity
      .createQueryBuilder('participants')
      .select([
        'participants.id',
        'participants.name',
        'participants.value',
        'participants.value_suggestion_with_drink',
        'participants.value_suggestion_with_out_drink',
        'participants.date'
      ])
      .leftJoinAndSelect('participants.barbecue', 'barbecue')
      .where('participants.id = :id', { id: id })
      .getOne()

    return participants
  }
}
