import { FindAccountByIdRepository } from '@/data/protocols/db/account/find-account-by-id-repository'
import { DbFindAccountById } from '@/data/usescases/account/db-find-account-by-id'
import { FindAccountById } from '@/domain/usescasses/account/find-account-by-id'
import { makeAccountByIdRepository } from '@/tests/unitary/data/mocks/mock-account'
import { makeAccountModel } from '@/tests/unitary/domain/mocks/auth/account/account-mocks'
import MockDate from 'mockdate'

interface SutTypes {
  sut: FindAccountById
  getAccountByIdRepositoryStub: FindAccountByIdRepository
}

const makeSut = (): SutTypes => {
  const getAccountByIdRepositoryStub = makeAccountByIdRepository()
  const sut = new DbFindAccountById(getAccountByIdRepositoryStub)

  return {
    sut,
    getAccountByIdRepositoryStub
  }
}

describe('DbGetAccountById', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call getAccountRepository with correct values ', async () => {
    const { sut, getAccountByIdRepositoryStub } = makeSut()
    const getSpy = jest.spyOn(getAccountByIdRepositoryStub, 'findById')
    await sut.findById('any_id')
    expect(getSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if get getAccountByIdRepository throws', async () => {
    const { sut, getAccountByIdRepositoryStub } = makeSut()
    jest.spyOn(getAccountByIdRepositoryStub, 'findById').mockRejectedValueOnce(new Error())
    const promise = sut.findById('any_id')
    await expect(promise).rejects.toThrow()
  })

  test('Should return a Account list on success', async () => {
    const { sut } = makeSut()
    const proposal = await sut.findById('any_id')
    expect(proposal).toEqual(makeAccountModel())
  })
})
