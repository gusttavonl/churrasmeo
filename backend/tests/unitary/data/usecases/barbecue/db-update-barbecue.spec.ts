import { UpdateBarbecueRepository } from '@/data/protocols/db/barbecue/update-barbecue-repository'
import { DbUpdateBarbecue } from '@/data/usescases/barbecue/db-update-barbecue'
import { UpdateBarbecue, UpdateBarbecueParams } from '@/domain/usescasses/barbacue/update-account'
import { makeUpdateBarbecueRepository } from '../../mocks/mock-barbecue'

interface SutTypes {
  updateBarbecueRepositoryStub: UpdateBarbecueRepository
  sut: UpdateBarbecue
}

const makeSut = (): SutTypes => {
  const updateBarbecueRepositoryStub = makeUpdateBarbecueRepository()
  const sut = new DbUpdateBarbecue(updateBarbecueRepositoryStub)

  return {
    updateBarbecueRepositoryStub,
    sut
  }
}

const makeParams = (): UpdateBarbecueParams => ({
  account: { id: 'any_id' },
  description: 'any_description',
  information: 'any_information',
  value: 1,
  date: new Date()
})

describe('DbUpdateBarbecueSpec', () => {
  test('Should call update repository with correct values', async () => {
    const { sut, updateBarbecueRepositoryStub } = makeSut()
    const updateSpy = jest.spyOn(updateBarbecueRepositoryStub, 'update')
    const params = makeParams()
    await sut.update('any_id', params)

    expect(updateSpy).toHaveBeenCalledWith('any_id', params)
  })

  test('Should return the affected rows quantity on success', async () => {
    const { sut } = makeSut()
    const response = await sut.update('any_id', makeParams())

    expect(response).toEqual(1)
  })

  test('Should throw if repository throws', async () => {
    const { sut, updateBarbecueRepositoryStub } = makeSut()
    jest.spyOn(updateBarbecueRepositoryStub, 'update').mockRejectedValue(new Error())
    const promise = sut.update('any_id', makeParams())

    await expect(promise).rejects.toThrow(new Error())
  })
})
