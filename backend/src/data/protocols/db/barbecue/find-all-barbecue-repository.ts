import { BarbecueModel } from '@/domain/models/barbecue'

export interface FindAllBarbecueRepository {
  findAll: (accountId) => Promise<BarbecueModel[]>
}
