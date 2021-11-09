import { BarbecueModel } from '@/domain/models/barbecue'

export type UpdateBarbecueParams = Omit<BarbecueModel, 'id' | 'created_at' | 'updated_at'>
export interface UpdateBarbecue {
  update: (id: string, barbecue: UpdateBarbecueParams) => Promise<number>
}
