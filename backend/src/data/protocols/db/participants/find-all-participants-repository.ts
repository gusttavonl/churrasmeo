import { ParticipantsModel } from '@/domain/models/participants'

export interface FindAllParticipantsRepository {
  findAll: (accountId: string) => Promise<ParticipantsModel[]>
}
