import { ParticipantsModel } from '@/domain/models/participants'

export interface FindParticipantsByIdRepository {
  findById: (id: string) => Promise<ParticipantsModel>
}
