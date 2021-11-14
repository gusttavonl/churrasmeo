import { ParticipantsModel } from '@/domain/models/participants'

export interface FindAllParticipantsRepository {
  findAll: (barbecueId: string) => Promise<ParticipantsModel[]>
}
