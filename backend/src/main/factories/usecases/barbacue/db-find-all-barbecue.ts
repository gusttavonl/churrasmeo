import { DbFindAllBarbecue } from '@/data/usescases/barbecue/db-find-all-barbecue'
import { FindAllBarbecue } from '@/domain/usescasses/barbacue/find-all-barbecue'
import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'

export const makeDbFindAllBarbecue = (): FindAllBarbecue => {
  const barbecueRepository = new BarbecueRepository()
  return new DbFindAllBarbecue(barbecueRepository)
}
