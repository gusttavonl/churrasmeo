import { Controller, ErrorHandler, HttpRequest, Validation } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import MockDate from 'mockdate'
import { badRequest } from '@/presentation/helpers/http/http-helper'
import { AddBarbecueController } from '@/presentation/controllers/barbecue/add-barbecue-controller'
import { makeAddBarbecueRepository } from '@/tests/unitary/data/mocks/mock-barbecue'
import { AddBarbecue } from '@/domain/usescasses/barbacue/add-barbecue'

interface SutTypes {
  validationStub: Validation
  errorHandlerStub: ErrorHandler
  addBarbecueStub: AddBarbecue
  sut: Controller
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const errorHandlerStub = makeErrorHandler()
  const addBarbecueStub = makeAddBarbecueRepository()

  const sut = new AddBarbecueController(addBarbecueStub, validationStub, errorHandlerStub)

  return {
    addBarbecueStub,
    errorHandlerStub,
    validationStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  body: {
    account: 'any_id',
    description: 'any_description',
    information: 'any_information',
    date: new Date()
  },
  params: {
    id: 'any_id'
  }
})

describe('AddBarbecueController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call add with correct params', async () => {
    const { sut, addBarbecueStub } = makeSut()
    const addSpy = jest.spyOn(addBarbecueStub, 'add')
    await sut.handle(makeParams())
    expect(addSpy).toHaveBeenCalledWith({
      account: 'any_id',
      description: 'any_description',
      information: 'any_information',
      date: new Date()
    })
  })

  test('Should return badRequest if validation returns error', async () => {
    const { sut, validationStub } = makeSut()
    jest.spyOn(validationStub, 'validate').mockReturnValue(new Error())
    const response = await sut.handle(makeParams())

    expect(response).toEqual(badRequest(new Error()))
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, addBarbecueStub, errorHandlerStub } = makeSut()

    jest.spyOn(addBarbecueStub, 'add').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())

    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })
})
