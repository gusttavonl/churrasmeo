import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { ok } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { FindAccountById } from '@/domain/usescasses/account/find-account-by-id'
import { makeAccountByIdRepository } from '@/tests/unitary/data/mocks/mock-account'
import { FindAccountByIdController } from '@/presentation/controllers/account/find-account-by-id-controller'
import { makeAccountModel } from '@/tests/unitary/domain/mocks/auth/account/account-mocks'
interface SutTypes {
  errorHandlerStub: ErrorHandler
  findAccountByIdStub: FindAccountById
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const findAccountByIdStub = makeAccountByIdRepository()
  const sut = new FindAccountByIdController(findAccountByIdStub, errorHandlerStub)

  return {
    findAccountByIdStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: { id: 'any_id' }
})

describe('FindAccountById', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call findById with correct param', async () => {
    const { sut, findAccountByIdStub } = makeSut()
    const findSpy = jest.spyOn(findAccountByIdStub, 'findById')

    await sut.handle(makeParams())
    expect(findSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, findAccountByIdStub, errorHandlerStub } = makeSut()
    jest.spyOn(findAccountByIdStub, 'findById').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return ok with company debit on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(makeParams())
    expect(response).toEqual(ok(makeAccountModel()))
  })
})
