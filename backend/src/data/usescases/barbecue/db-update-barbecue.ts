import { UpdateBarbecueRepository } from '@/data/protocols/db/barbecue/update-barbecue-repository'
import { UpdateBarbecue, UpdateBarbecueParams } from '@/domain/usescasses/barbacue/update-account'

export class DbUpdateBarbecue implements UpdateBarbecue {
  constructor (
    private readonly updateBarbecueRepository: UpdateBarbecueRepository
  ) {}

  async update (id: string, barbecue: UpdateBarbecueParams): Promise<number> {
    const affected = await this.updateBarbecueRepository.update(id, barbecue)
    return affected
  }
}
