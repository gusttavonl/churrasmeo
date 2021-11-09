import { UpdateAccountRepository } from '@/data/protocols/db/account/update-account-repository'
import { DbUpdateAccount } from '@/data/usescases/account/db-update-account'
import { UpdateAccount, UpdateAccountParams } from '@/domain/usescasses/account/update-account'
import { makeHasherAccountRepository, makeUpdateAccountRepository } from '@/tests/unitary/data/mocks/mock-account'

interface SutTypes {
  updateAccountRepositoryStub: UpdateAccountRepository
  sut: UpdateAccount
}

const makeSut = (): SutTypes => {
  const hasher = makeHasherAccountRepository()
  const updateAccountRepositoryStub = makeUpdateAccountRepository()
  const sut = new DbUpdateAccount(hasher, updateAccountRepositoryStub)

  return {
    updateAccountRepositoryStub,
    sut
  }
}

const makeParams = (): UpdateAccountParams => ({
  name: 'any_account_name',
  email: 'any_account_email',
  password: 'any_hash'
})

describe('DbUpdateAccountSpec', () => {
  test('Should call update repository with correct values', async () => {
    const { sut, updateAccountRepositoryStub } = makeSut()
    const updateSpy = jest.spyOn(updateAccountRepositoryStub, 'update')
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
    const { sut, updateAccountRepositoryStub } = makeSut()
    jest.spyOn(updateAccountRepositoryStub, 'update').mockRejectedValue(new Error())
    const promise = sut.update('any_id', makeParams())

    await expect(promise).rejects.toThrow(new Error())
  })
})
