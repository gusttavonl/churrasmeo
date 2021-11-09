import { RemoveBarbecueRepository } from '@/data/protocols/db/barbecue/remove-barbecue-repository'
import { DbRemoveBarbecue } from '@/data/usescases/barbecue/db-remove-barbecue'
import { RemoveBarbecue } from '@/domain/usescasses/barbacue/remove-account'
import { makeRemoveBarbecueRepositoryStub } from '@/tests/unitary/data/mocks/mock-barbecue'

interface SutTypes {
  removeBarbecueRepositoryStub: RemoveBarbecueRepository
  sut: RemoveBarbecue
}

const makeSut = (): SutTypes => {
  const removeBarbecueRepositoryStub = makeRemoveBarbecueRepositoryStub()

  const sut = new DbRemoveBarbecue(removeBarbecueRepositoryStub)

  return {
    removeBarbecueRepositoryStub,
    sut
  }
}

describe('DbRemoveBarbecue', () => {
  test("Should call remove repository with correct values if debit doesn't have a parent", async () => {
    const { sut, removeBarbecueRepositoryStub } = makeSut()
    const removeSpy = jest.spyOn(removeBarbecueRepositoryStub, 'remove')

    await sut.remove('any_id')
    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if repository throws', async () => {
    const { sut, removeBarbecueRepositoryStub } = makeSut()
    jest.spyOn(removeBarbecueRepositoryStub, 'remove').mockRejectedValue(new Error())

    const promise = sut.remove('any_id')
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should return the affected row number on success', async () => {
    const { sut } = makeSut()
    const response = await sut.remove('any_id')
    expect(response).toEqual(1)
  })
})
