import { BarbecueModel } from '@/domain/models/barbecue'

export interface FindBarbecueById {
  findById: (id: string) => Promise<BarbecueModel>
}
