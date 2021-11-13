import { DbAddParticipants } from '@/data/usescases/participants/db-add-participants'
import { AddParticipantsRepository } from '@/data/usescases/participants/db-participants-protocols'
import { AddParticipants, AddParticipantsParams } from '@/domain/usescasses/participants/add-participants'
import { makeParticipantsModel } from '@/tests/unitary/domain/mocks/participants/participants-mocks'
import MockDate from 'mockdate'
import { makeBarbecueByIdRepository, makeUpdateBarbecueRepository } from '../../mocks/mock-barbecue'
import { makeAddParticipantsRepository } from '../../mocks/mock-participants'

interface SutTypes {
  addParticipantsRepositoryStub: AddParticipantsRepository
  sut: AddParticipants
}

const makeSut = (): SutTypes => {
  const findByIdBarbecueRepositoryStub = makeBarbecueByIdRepository()
  const addBarbecueRepositoryStub = makeUpdateBarbecueRepository()
  const addParticipantsRepositoryStub = makeAddParticipantsRepository()
  const sut = new DbAddParticipants(addParticipantsRepositoryStub, findByIdBarbecueRepositoryStub, addBarbecueRepositoryStub)

  return {
    addParticipantsRepositoryStub,
    sut
  }
}

const makeParams = (): AddParticipantsParams => ({
  barbecue: { id: 'any_id' },
  name: 'any_name',
  value: 1,
  value_suggestion_with_drink: 1,
  value_suggestion_with_out_drink: 1
})

describe('DbAddParticipants', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call add repository with correct values', async () => {
    const { sut, addParticipantsRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addParticipantsRepositoryStub, 'add')
    await sut.add(makeParams())

    expect(addSpy).toHaveBeenCalledWith({
      barbecue: { id: 'any_id' },
      name: 'any_name',
      value: 1,
      value_suggestion_with_drink: 1,
      value_suggestion_with_out_drink: 1
    })
  })

  test('Should return a participants on success', async () => {
    const { sut } = makeSut()
    const response = await sut.add(makeParams())

    expect(response).toEqual(makeParticipantsModel())
  })

  test('Should throw if repository throws', async () => {
    const { sut, addParticipantsRepositoryStub } = makeSut()

    jest.spyOn(addParticipantsRepositoryStub, 'add').mockRejectedValue(new Error())
    const promise = sut.add(makeParams())

    await expect(promise).rejects.toThrow(new Error())
  })
})
