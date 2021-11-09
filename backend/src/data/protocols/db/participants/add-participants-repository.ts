import { ParticipantsModel } from '@/domain/models/participants'
import { AddParticipantsParams } from '@/domain/usescasses/participants/add-participants'

export interface AddParticipantsRepository {
  add: (participantsData: AddParticipantsParams) => Promise<ParticipantsModel>
}
