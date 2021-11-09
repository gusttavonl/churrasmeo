import { DbAddBarbecue } from '@/data/usescases/barbecue/db-add-barbecue'
import { AddBarbecue } from '@/domain/usescasses/barbacue/add-barbecue'
import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'

export const makeDbAddBarbecue = (): AddBarbecue => {
  const barbecueRepository = new BarbecueRepository()
  return new DbAddBarbecue(barbecueRepository)
}
