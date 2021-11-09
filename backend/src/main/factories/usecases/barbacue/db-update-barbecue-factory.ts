import { DbUpdateBarbecue } from '@/data/usescases/barbecue/db-update-barbecue'
import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'
import { UpdateBarbecue } from '@/domain/usescasses/barbacue/update-account'

export const makeDbUpdateBarbecue = (): UpdateBarbecue => {
  const barbecueRepository = new BarbecueRepository()
  return new DbUpdateBarbecue(barbecueRepository)
}
