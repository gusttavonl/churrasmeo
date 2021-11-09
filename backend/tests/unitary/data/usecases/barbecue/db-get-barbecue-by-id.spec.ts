import { FindBarbecueByIdRepository } from '@/data/protocols/db/barbecue/find-barbecue-by-id-repository'
import { DbFindBarbecueById } from '@/data/usescases/barbecue/db-find-barbecue-by-id'
import { FindBarbecueById } from '@/domain/usescasses/barbacue/find-barbecue-by-id'
import { makeBarbecueByIdRepository } from '@/tests/unitary/data/mocks/mock-barbecue'
import { makeBarbecueModel } from '@/tests/unitary/domain/mocks/barbecue/barbecue-mocks'
import MockDate from 'mockdate'

interface SutTypes {
  sut: FindBarbecueById
  getBarbecueByIdRepositoryStub: FindBarbecueByIdRepository
}

const makeSut = (): SutTypes => {
  const getBarbecueByIdRepositoryStub = makeBarbecueByIdRepository()
  const sut = new DbFindBarbecueById(getBarbecueByIdRepositoryStub)

  return {
    sut,
    getBarbecueByIdRepositoryStub
  }
}

describe('DbGetBarbecueById', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call getBarbecueRepository with correct values ', async () => {
    const { sut, getBarbecueByIdRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(getBarbecueByIdRepositoryStub, 'findById')
    await sut.findById('any_id')
    expect(getSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if get getBarbecueByIdRepository throws', async () => {
    const { sut, getBarbecueByIdRepositoryStub } = makeSut()
    jest.spyOn(getBarbecueByIdRepositoryStub, 'findById').mockRejectedValueOnce(new Error())
    const promise = sut.findById('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should return a Barbecue list on success', async () => {
    const { sut } = makeSut()
    const proposal = await sut.findById('any_id')
    expect(proposal).toEqual(makeBarbecueModel())
  })
})
