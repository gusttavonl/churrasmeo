
import { FindBarbecueByIdRepository } from '@/data/protocols/db/barbecue/find-barbecue-by-id-repository'
import { BarbecueModel } from '@/domain/models/barbecue'
import { FindBarbecueById } from '@/domain/usescasses/barbacue/find-barbecue-by-id'

export class DbFindBarbecueById implements FindBarbecueById {
  constructor (
    private readonly findBarbecueByIdRepository: FindBarbecueByIdRepository
  ) {}

  async findById (id: string): Promise<BarbecueModel> {
    const barbecuesIdResponse = await this.findBarbecueByIdRepository.findById(id)

    return barbecuesIdResponse
  }
}
