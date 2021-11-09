import { DbAddBarbecue } from '@/data/usescases/barbecue/db-add-barbecue'
import { AddBarbecueRepository } from '@/data/usescases/barbecue/db-barbecue-protocols'
import { AddBarbecue, AddBarbecueParams } from '@/domain/usescasses/barbacue/add-barbecue'
import { makeBarbecueModel } from '@/tests/unitary/domain/mocks/barbecue/barbecue-mocks'
import MockDate from 'mockdate'
import { makeAddBarbecueRepository } from '../../mocks/mock-barbecue'

interface SutTypes {
  addBarbecueRepositoryStub: AddBarbecueRepository
  sut: AddBarbecue
}

const makeSut = (): SutTypes => {
  const addBarbecueRepositoryStub = makeAddBarbecueRepository()
  const sut = new DbAddBarbecue(addBarbecueRepositoryStub)

  return {
    addBarbecueRepositoryStub,
    sut
  }
}

const makeParams = (): AddBarbecueParams => ({
  account: { id: 'any_id' },
  description: 'any_description',
  information: 'any_information',
  value: 1,
  date: new Date()
})

describe('DbAddBarbecue', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call add repository with correct values', async () => {
    const { sut, addBarbecueRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addBarbecueRepositoryStub, 'add')
    await sut.add(makeParams())

    expect(addSpy).toHaveBeenCalledWith({
      account: { id: 'any_id' },
      description: 'any_description',
      information: 'any_information',
      value: 1,
      date: new Date()
    })
  })

  test('Should return a barbecue on success', async () => {
    const { sut } = makeSut()
    const response = await sut.add(makeParams())

    expect(response).toEqual(makeBarbecueModel())
  })

  test('Should throw if repository throws', async () => {
    const { sut, addBarbecueRepositoryStub } = makeSut()

    jest.spyOn(addBarbecueRepositoryStub, 'add').mockRejectedValue(new Error())
    const promise = sut.add(makeParams())

    await expect(promise).rejects.toThrow(new Error())
  })
})
