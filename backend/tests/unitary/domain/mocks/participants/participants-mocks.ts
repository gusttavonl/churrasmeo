import { ParticipantsModel } from '@/domain/models/participants'
import { AddParticipantsParams } from '@/domain/usescasses/participants/add-participants'

export const makeParticipantsModel = (): ParticipantsModel => ({
  id: 'any_id',
  barbecue: { id: 'any_barbecue' },
  name: 'any_name',
  value: 1,
  value_suggestion_with_drink: 1,
  value_suggestion_with_out_drink: 1
})

export const makeParticipantsParams = (): AddParticipantsParams => ({
  barbecue: { id: 'any_barbecue' },
  name: 'any_name',
  value: 1,
  value_suggestion_with_drink: 1,
  value_suggestion_with_out_drink: 1
})
