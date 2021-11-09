import { ParticipantsModel } from '@/domain/models/Participants'

export type AddParticipantsParams = Omit<ParticipantsModel, 'id' | 'created_at' | 'updated_at'>
export interface AddParticipants {
  add: (participants: AddParticipantsParams) => Promise<ParticipantsModel>
}
