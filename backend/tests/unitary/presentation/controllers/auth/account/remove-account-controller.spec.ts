import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { noContent } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { RemoveAccount } from '@/domain/usescasses/account/remove-account'
import { makeRemoveAccountRepositoryStub } from '@/tests/unitary/data/mocks/mock-account'
import { RemoveAccountController } from '@/presentation/controllers/account/remove-account-controller'

interface SutTypes {
  removeAccountStub: RemoveAccount
  errorHandlerStub: ErrorHandler
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const removeAccountStub = makeRemoveAccountRepositoryStub()
  const validationStub = makeValidation()
  const sut = new RemoveAccountController(removeAccountStub, validationStub, errorHandlerStub)

  return {
    removeAccountStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: {
    id: 'any_id'
  }
})

describe('RemoveAccountController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call removeAccount with correct param', async () => {
    const { sut, removeAccountStub } = makeSut()
    const removeSpy = jest.spyOn(removeAccountStub, 'remove')
    await sut.handle(makeParams())
    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return noContent on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeParams())
    expect(response).toEqual(noContent())
  })

  test('Should call errorHandler if delete throws', async () => {
    const { sut,removeAccountStub, errorHandlerStub } = makeSut()
    jest.spyOn(removeAccountStub, 'remove').mockRejectedValueOnce(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalled()
  })
})
