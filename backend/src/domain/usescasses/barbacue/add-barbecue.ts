import { BarbecueModel } from '@/domain/models/Barbecue'

export type AddBarbecueParams = Omit<BarbecueModel, 'id' | 'created_at' | 'updated_at' | 'value'>
export interface AddBarbecue {
  add: (barbecue: AddBarbecueParams) => Promise<BarbecueModel>
}
