import { RemoveAccountRepository } from '@/data/protocols/db/account/remove-account-repository'
import { DbRemoveAccount } from '@/data/usescases/account/db-remove-account'
import { RemoveAccount } from '@/domain/usescasses/account/remove-account'
import { makeRemoveAccountRepositoryStub } from '@/tests/unitary/data/mocks/mock-account'

interface SutTypes {
  removeAccountRepositoryStub: RemoveAccountRepository
  sut: RemoveAccount
}

const makeSut = (): SutTypes => {
  const removeAccountRepositoryStub = makeRemoveAccountRepositoryStub()

  const sut = new DbRemoveAccount(removeAccountRepositoryStub)

  return {
    removeAccountRepositoryStub,
    sut
  }
}

describe('DbRemoveAccount', () => {
  test("Should call remove repository with correct values if debit doesn't have a parent", async () => {
    const { sut, removeAccountRepositoryStub } = makeSut()
    const removeSpy = jest.spyOn(removeAccountRepositoryStub, 'remove')

    await sut.remove('any_id')
    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should throw if repository throws', async () => {
    const { sut, removeAccountRepositoryStub } = makeSut()
    jest.spyOn(removeAccountRepositoryStub, 'remove').mockRejectedValue(new Error())

    const promise = sut.remove('any_id')
    await expect(promise).rejects.toThrow(new Error())
  })

  test('Should return the affected row number on success', async () => {
    const { sut } = makeSut()
    const response = await sut.remove('any_id')
    expect(response).toEqual(1)
  })
})
