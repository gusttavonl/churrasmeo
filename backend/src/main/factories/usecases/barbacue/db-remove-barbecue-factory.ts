import { DbRemoveBarbecue } from '@/data/usescases/barbecue/db-remove-barbecue'
import { RemoveBarbecue } from '@/domain/usescasses/barbacue/remove-account'
import { BarbecueRepository } from '@/infra/db/postgres/modules/barbecue/barbecue-repository'

export const makeDbRemoveBarbecue = (): RemoveBarbecue => {
  const barbecueRepository = new BarbecueRepository()
  return new DbRemoveBarbecue(barbecueRepository)
}
