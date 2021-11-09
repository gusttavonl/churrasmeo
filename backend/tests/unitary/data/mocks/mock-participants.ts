import { FindAllParticipantsRepository } from '@/data/protocols/db/participants/find-all-participants-repository'
import { FindParticipantsByIdRepository } from '@/data/protocols/db/participants/find-participants-by-id-repository'
import { RemoveParticipantsRepository } from '@/data/protocols/db/participants/remove-participants-repository'
import { AddParticipantsRepository } from '@/data/usescases/participants/db-participants-protocols'
import { ParticipantsModel } from '@/domain/models/participants'
import { AddParticipantsParams } from '@/domain/usescasses/participants/add-participants'
import { makeParticipantsModel } from '../../domain/mocks/participants/participants-mocks'

export const makeAddParticipantsRepository = (): AddParticipantsRepository => {
  class AddParticipantsRepositoryStub implements AddParticipantsRepository {
    async add (participants: AddParticipantsParams): Promise<ParticipantsModel> {
      return await new Promise(resolve => resolve(makeParticipantsModel()))
    }
  }

  return new AddParticipantsRepositoryStub()
}

export const makeRemoveParticipantsRepositoryStub = (): RemoveParticipantsRepository => {
  class RemoveParticipantsRepositoryStub implements RemoveParticipantsRepository {
    async remove (participantsId: string): Promise<number> {
      return await new Promise(resolve => resolve(1))
    }
  }
  return new RemoveParticipantsRepositoryStub()
}

export const makeParticipantsByIdRepository = (): FindParticipantsByIdRepository => {
  class ParticipantsByIdRepositoryStub implements FindParticipantsByIdRepository {
    async findById (idParticipants: string): Promise<ParticipantsModel> {
      return await new Promise(resolve => resolve(makeParticipantsModel()))
    }
  }
  return new ParticipantsByIdRepositoryStub()
}

export const makeFindAllParticipantsRepository = (): FindAllParticipantsRepository => {
  class ParticipantsRepositoryStub implements FindAllParticipantsRepository {
    async findAll (idAccount: string): Promise<ParticipantsModel[]> {
      return await new Promise(resolve => resolve([makeParticipantsModel()]))
    }
  }
  return new ParticipantsRepositoryStub()
}
