import { BarbecueModel } from '@/domain/models/barbecue'
import { AddBarbecueParams } from '@/domain/usescasses/barbacue/add-barbecue'

export const makeBarbecueModel = (): BarbecueModel => ({
  id: 'any_id',
  account: { id: 'any_id' },
  description: 'any_description',
  information: 'any_information',
  value: 1,
  date: new Date()
})

export const makeBarbecue = (): AddBarbecueParams => ({
  account: { id: 'any_id' },
  description: 'any_description',
  information: 'any_information',
  value: 1,
  date: new Date()
})
