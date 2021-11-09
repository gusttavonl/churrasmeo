import { AddBarbecueRepository } from '@/data/protocols/db/barbecue/add-barbecue-repository'
import { BarbecueModel } from '@/domain/models/barbecue'
import { AddBarbecue, AddBarbecueParams } from '@/domain/usescasses/barbacue/add-barbecue'

export class DbAddBarbecue implements AddBarbecue {
  constructor (
    private readonly addBarbecueRepository: AddBarbecueRepository
  ) {}

  async add (barbecueData: AddBarbecueParams): Promise<BarbecueModel> {
    const barbecue = await this.addBarbecueRepository.add(barbecueData)
    return barbecue
  }
}
