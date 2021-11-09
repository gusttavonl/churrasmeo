import { UpdateBarbecueParams } from '@/domain/usescasses/barbacue/update-account'

export interface UpdateBarbecueRepository {
  update: (id: string, barbecue: UpdateBarbecueParams) => Promise<number>
}
