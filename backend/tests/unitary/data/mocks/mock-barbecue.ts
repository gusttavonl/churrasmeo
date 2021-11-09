import { FindAllBarbecueRepository } from '@/data/protocols/db/barbecue/find-all-barbecue-repository'
import { FindBarbecueByIdRepository } from '@/data/protocols/db/barbecue/find-barbecue-by-id-repository'
import { RemoveBarbecueRepository } from '@/data/protocols/db/barbecue/remove-barbecue-repository'
import { UpdateBarbecueRepository } from '@/data/protocols/db/barbecue/update-barbecue-repository'
import { AddBarbecueRepository } from '@/data/usescases/barbecue/db-barbecue-protocols'
import { BarbecueModel } from '@/domain/models/barbecue'
import { AddBarbecueParams } from '@/domain/usescasses/barbacue/add-barbecue'
import { UpdateBarbecueParams } from '@/domain/usescasses/barbacue/update-account'
import { makeBarbecueModel } from '../../domain/mocks/barbecue/barbecue-mocks'

export const makeAddBarbecueRepository = (): AddBarbecueRepository => {
  class AddBarbecueRepositoryStub implements AddBarbecueRepository {
    async add (barbecue: AddBarbecueParams): Promise<BarbecueModel> {
      return await new Promise(resolve => resolve(makeBarbecueModel()))
    }
  }

  return new AddBarbecueRepositoryStub()
}

export const makeRemoveBarbecueRepositoryStub = (): RemoveBarbecueRepository => {
  class RemoveBarbecueRepositoryStub implements RemoveBarbecueRepository {
    async remove (barbecueId: string): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }
  return new RemoveBarbecueRepositoryStub()
}

export const makeBarbecueByIdRepository = (): FindBarbecueByIdRepository => {
  class BarbecuesByIdRepositoryStub implements FindBarbecueByIdRepository {
    async findById (idBarbecue: string): Promise<BarbecueModel> {
      return await new Promise(resolve => resolve(makeBarbecueModel()))
    }
  }
  return new BarbecuesByIdRepositoryStub()
}

export const makeUpdateBarbecueRepository = (): UpdateBarbecueRepository => {
  class UpdateBarbecueRepositoryStub implements UpdateBarbecueRepository {
    async update (barbecueId: string, barbecueData: UpdateBarbecueParams): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }

  return new UpdateBarbecueRepositoryStub()
}

export const makeFindAllBarbecueRepository = (): FindAllBarbecueRepository => {
  class BarbecueRepositoryStub implements FindAllBarbecueRepository {
    async findAll (idAccount: string): Promise<BarbecueModel[]> {
      return await new Promise(resolve => resolve([makeBarbecueModel()]))
    }
  }
  return new BarbecueRepositoryStub()
}
