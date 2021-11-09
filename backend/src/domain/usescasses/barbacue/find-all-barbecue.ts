import { BarbecueModel } from '@/domain/models/barbecue'

export interface FindAllBarbecue {
  findAll: (accountId: string) => Promise<BarbecueModel[]>
}
