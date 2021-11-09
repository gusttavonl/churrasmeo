import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { ok } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { makeBarbecueByIdRepository } from '@/tests/unitary/data/mocks/mock-barbecue'
import { FindBarbecueByIdController } from '@/presentation/controllers/barbecue/find-barbecue-by-id-controller'
import { FindBarbecueById } from '@/domain/usescasses/barbacue/find-barbecue-by-id'
import { makeBarbecueModel } from '@/tests/unitary/domain/mocks/barbecue/barbecue-mocks'
interface SutTypes {
  errorHandlerStub: ErrorHandler
  findBarbecueByIdStub: FindBarbecueById
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const findBarbecueByIdStub = makeBarbecueByIdRepository()
  const sut = new FindBarbecueByIdController(findBarbecueByIdStub, errorHandlerStub)

  return {
    findBarbecueByIdStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: { id: 'any_id' }
})

describe('FindBarbecueById', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call findById with correct param', async () => {
    const { sut, findBarbecueByIdStub } = makeSut()
    const findSpy = jest.spyOn(findBarbecueByIdStub, 'findById')

    await sut.handle(makeParams())
    expect(findSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, findBarbecueByIdStub, errorHandlerStub } = makeSut()
    jest.spyOn(findBarbecueByIdStub, 'findById').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return ok with company debit on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(makeParams())
    expect(response).toEqual(ok(makeBarbecueModel()))
  })
})
