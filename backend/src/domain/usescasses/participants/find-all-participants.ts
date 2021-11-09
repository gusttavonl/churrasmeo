import { ParticipantsModel } from '@/domain/models/participants'

export interface FindAllParticipants {
  findAll: (accountId: string) => Promise<ParticipantsModel[]>
}
