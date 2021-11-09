import { FindAllBarbecueRepository } from '@/data/protocols/db/barbecue/find-all-barbecue-repository'
import { DbFindAllBarbecue } from '@/data/usescases/barbecue/db-find-all-barbecue'
import { FindAllBarbecue } from '@/domain/usescasses/barbacue/find-all-barbecue'
import { makeFindAllBarbecueRepository } from '@/tests/unitary/data/mocks/mock-barbecue'
import { makeBarbecueModel } from '@/tests/unitary/domain/mocks/barbecue/barbecue-mocks'
import MockDate from 'mockdate'

interface SutTypes {
  sut: FindAllBarbecue
  getAllBarbecueRepositoryStub: FindAllBarbecueRepository
}

const makeSut = (): SutTypes => {
  const getAllBarbecueRepositoryStub = makeFindAllBarbecueRepository()
  const sut = new DbFindAllBarbecue(getAllBarbecueRepositoryStub)

  return {
    sut,
    getAllBarbecueRepositoryStub
  }
}

describe('DbGetAllBarbecue', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call getBarbecueRepository with correct values ', async () => {
    const { sut, getAllBarbecueRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(getAllBarbecueRepositoryStub, 'findAll')
    await sut.findAll('any_id')
    expect(getSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if get getBarbecueRepository throws', async () => {
    const { sut, getAllBarbecueRepositoryStub } = makeSut()
    jest.spyOn(getAllBarbecueRepositoryStub, 'findAll').mockRejectedValueOnce(new Error())
    const promise = sut.findAll('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should return a Barbecue list on success', async () => {
    const { sut } = makeSut()
    const proposal = await sut.findAll('any_id')
    expect(proposal).toEqual([makeBarbecueModel()])
  })
})
