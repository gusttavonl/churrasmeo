import { FindParticipantsByIdRepository } from '@/data/protocols/db/participants/find-participants-by-id-repository'
import { DbFindParticipantsById } from '@/data/usescases/participants/db-find-participants-by-id'
import { FindParticipantsById } from '@/domain/usescasses/participants/find-participants-by-id'
import { makeParticipantsByIdRepository } from '@/tests/unitary/data/mocks/mock-participants'
import { makeParticipantsModel } from '@/tests/unitary/domain/mocks/participants/participants-mocks'
import MockDate from 'mockdate'

interface SutTypes {
  sut: FindParticipantsById
  getParticipantsByIdRepositoryStub: FindParticipantsByIdRepository
}

const makeSut = (): SutTypes => {
  const getParticipantsByIdRepositoryStub = makeParticipantsByIdRepository()
  const sut = new DbFindParticipantsById(getParticipantsByIdRepositoryStub)

  return {
    sut,
    getParticipantsByIdRepositoryStub
  }
}

describe('DbGetParticipantsById', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call getParticipantsRepository with correct values ', async () => {
    const { sut, getParticipantsByIdRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(getParticipantsByIdRepositoryStub, 'findById')
    await sut.findById('any_id')
    expect(getSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if get getParticipantsByIdRepository throws', async () => {
    const { sut, getParticipantsByIdRepositoryStub } = makeSut()
    jest.spyOn(getParticipantsByIdRepositoryStub, 'findById').mockRejectedValueOnce(new Error())
    const promise = sut.findById('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should return a Participants list on success', async () => {
    const { sut } = makeSut()
    const proposal = await sut.findById('any_id')
    expect(proposal).toEqual(makeParticipantsModel())
  })
})
