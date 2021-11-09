import { FindAllParticipantsRepository } from '@/data/protocols/db/participants/find-all-participants-repository'
import { DbFindAllParticipants } from '@/data/usescases/participants/db-find-all-participants'
import { FindAllParticipants } from '@/domain/usescasses/participants/find-all-participants'
import { makeFindAllParticipantsRepository } from '@/tests/unitary/data/mocks/mock-participants'
import { makeParticipantsModel } from '@/tests/unitary/domain/mocks/participants/participants-mocks'
import MockDate from 'mockdate'

interface SutTypes {
  sut: FindAllParticipants
  getAllParticipantsRepositoryStub: FindAllParticipantsRepository
}

const makeSut = (): SutTypes => {
  const getAllParticipantsRepositoryStub = makeFindAllParticipantsRepository()
  const sut = new DbFindAllParticipants(getAllParticipantsRepositoryStub)

  return {
    sut,
    getAllParticipantsRepositoryStub
  }
}

describe('DbGetAllParticipants', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call getParticipantsRepository with correct values ', async () => {
    const { sut, getAllParticipantsRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(getAllParticipantsRepositoryStub, 'findAll')
    await sut.findAll('any_id')
    expect(getSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if get getParticipantsRepository throws', async () => {
    const { sut, getAllParticipantsRepositoryStub } = makeSut()
    jest.spyOn(getAllParticipantsRepositoryStub, 'findAll').mockRejectedValueOnce(new Error())
    const promise = sut.findAll('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should return a Participants list on success', async () => {
    const { sut } = makeSut()
    const proposal = await sut.findAll('any_id')
    expect(proposal).toEqual([makeParticipantsModel()])
  })
})
