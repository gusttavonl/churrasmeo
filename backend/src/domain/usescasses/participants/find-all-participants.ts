import { ParticipantsModel } from '@/domain/models/participants'

export interface FindAllParticipants {
  findAll: (barbecueId: string) => Promise<ParticipantsModel[]>
}
