import { BarbecueModel } from '@/domain/models/barbecue'
import { AddBarbecueParams } from '@/domain/usescasses/barbacue/add-barbecue'

export interface AddBarbecueRepository {
  add: (barbecueData: AddBarbecueParams) => Promise<BarbecueModel>
}
