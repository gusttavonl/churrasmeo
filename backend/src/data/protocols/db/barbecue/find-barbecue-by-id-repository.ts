import { BarbecueModel } from '@/domain/models/barbecue'

export interface FindBarbecueByIdRepository {
  findById: (id: string) => Promise<BarbecueModel>
}
