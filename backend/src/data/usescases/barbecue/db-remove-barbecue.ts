import { RemoveBarbecueRepository } from '@/data/protocols/db/barbecue/remove-barbecue-repository'
import { RemoveBarbecue } from '@/domain/usescasses/barbacue/remove-account'

export class DbRemoveBarbecue implements RemoveBarbecue {
  constructor (
    private readonly removeBarbecueRepository: RemoveBarbecueRepository
  ) {}

  async remove (id: string): Promise<number> {
    const affected = await this.removeBarbecueRepository.remove(id)

    return affected
  }
}
