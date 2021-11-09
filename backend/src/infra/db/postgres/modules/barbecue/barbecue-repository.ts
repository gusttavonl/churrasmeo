
import { AddBarbecueRepository } from '@/data/protocols/db/barbecue/add-barbecue-repository'
import { FindAllBarbecueRepository } from '@/data/protocols/db/barbecue/find-all-barbecue-repository'
import { FindBarbecueByIdRepository } from '@/data/protocols/db/barbecue/find-barbecue-by-id-repository'
import { RemoveBarbecueRepository } from '@/data/protocols/db/barbecue/remove-barbecue-repository'
import { UpdateBarbecueRepository } from '@/data/protocols/db/barbecue/update-barbecue-repository'
import { BarbecueModel } from '@/domain/models/barbecue'
import { AddBarbecueParams } from '@/domain/usescasses/barbacue/add-barbecue'
import { UpdateBarbecueParams } from '@/domain/usescasses/barbacue/update-account'
import { getRepository } from 'typeorm'
import { BarbecueEntity } from './barbecue-entity'

export class BarbecueRepository implements AddBarbecueRepository, FindAllBarbecueRepository, FindBarbecueByIdRepository, UpdateBarbecueRepository, RemoveBarbecueRepository {
  async add (barbecueData: AddBarbecueParams): Promise<BarbecueModel> {
    const barbecueEntity = getRepository(BarbecueEntity)
    const barbecue = barbecueEntity.create(barbecueData)

    return await barbecueEntity.save(barbecue)
  }

  async update (barbecueId: string, barbecueData: UpdateBarbecueParams): Promise<number> {
    const barbecueEntity = getRepository(BarbecueEntity)
    const respondeDb = await barbecueEntity.update(barbecueId, barbecueData)

    return respondeDb.affected
  }

  async remove (barbecueId: string): Promise<number> {
    const barbecueEntity = getRepository(BarbecueEntity)
    const dbResponse = await barbecueEntity.delete(barbecueId)

    return dbResponse.affected
  }

  async findAll (accountId: string): Promise<BarbecueModel[]> {
    const barbecueEntity = getRepository(BarbecueEntity)

    const barbecue = await barbecueEntity
      .createQueryBuilder('barbecue')
      .select([
        'barbecue.id',
        'barbecue.description',
        'barbecue.information',
        'barbecue.value',
        'barbecue.date'
      ])
      .leftJoinAndSelect('barbecue.account', 'account')
      .leftJoinAndSelect('barbecue.participants', 'participants')
      .where('barbecue.account = :accountId', { accountId: accountId })
      .getMany()

    return barbecue
  }

  async findById (id: string): Promise<BarbecueModel> {
    const barbecueEntity = getRepository(BarbecueEntity)
    const barbecue = await barbecueEntity
      .createQueryBuilder('barbecue')
      .select([
        'barbecue.id',
        'barbecue.description',
        'barbecue.information',
        'barbecue.value',
        'barbecue.date'
      ])
      .leftJoinAndSelect('barbecue.account', 'account')
      .leftJoinAndSelect('barbecue.participants', 'participants')
      .where('barbecue.id = :id', { id: id })
      .getOne()

    return barbecue
  }
}
