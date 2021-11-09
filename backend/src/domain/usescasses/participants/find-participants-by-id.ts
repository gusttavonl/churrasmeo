import { ParticipantsModel } from '@/domain/models/participants'

export interface FindParticipantsById {
  findById: (id: string) => Promise<ParticipantsModel>
}
