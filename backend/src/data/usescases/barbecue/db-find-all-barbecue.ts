import { FindAllBarbecueRepository } from '@/data/protocols/db/barbecue/find-all-barbecue-repository'
import { BarbecueModel } from '@/domain/models/barbecue'
import { FindAllBarbecue } from '@/domain/usescasses/barbacue/find-all-barbecue'

export class DbFindAllBarbecue implements FindAllBarbecue {
  constructor (
    private readonly findAllBarbecueRepository: FindAllBarbecueRepository
  ) {}

  async findAll (accountId: string): Promise<BarbecueModel[]> {
    const barbacues = await this.findAllBarbecueRepository.findAll(accountId)

    return barbacues
  }
}
