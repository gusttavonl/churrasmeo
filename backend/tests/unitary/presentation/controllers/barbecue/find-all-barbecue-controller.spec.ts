import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { ok } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { FindAllBarbecue } from '@/domain/usescasses/barbacue/find-all-barbecue'
import { makeFindAllBarbecueRepository } from '@/tests/unitary/data/mocks/mock-barbecue'
import { FindAllBarbecueController } from '@/presentation/controllers/barbecue/find-all-barbecue-controller'
import { makeBarbecueModel } from '@/tests/unitary/domain/mocks/barbecue/barbecue-mocks'
interface SutTypes {
  errorHandlerStub: ErrorHandler
  findBarbecueStub: FindAllBarbecue
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const findBarbecueStub = makeFindAllBarbecueRepository()
  const sut = new FindAllBarbecueController(findBarbecueStub, errorHandlerStub)

  return {
    findBarbecueStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: { id: 'any_id' }
})

describe('FindBarbecue', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call find with correct param', async () => {
    const { sut, findBarbecueStub } = makeSut()
    const findSpy = jest.spyOn(findBarbecueStub, 'findAll')

    await sut.handle(makeParams())
    expect(findSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, findBarbecueStub, errorHandlerStub } = makeSut()
    jest.spyOn(findBarbecueStub, 'findAll').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return ok with company debit on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(makeParams())
    expect(response).toEqual(ok([makeBarbecueModel()]))
  })
})
