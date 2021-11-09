import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'
import { DbFindBarbecueById } from '@/data/usescases/barbecue/db-find-barbecue-by-id'
import { FindBarbecueById } from '@/domain/usescasses/barbacue/find-barbecue-by-id'

export const makeDbFindBarbecueById = (): FindBarbecueById => {
  const barbecueRepository = new BarbecueRepository()
  return new DbFindBarbecueById(barbecueRepository)
}
