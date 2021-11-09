import { Controller, ErrorHandler, HttpRequest, Validation } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import MockDate from 'mockdate'
import { badRequest } from '@/presentation/helpers/http/http-helper'
import { AddParticipantsController } from '@/presentation/controllers/participants/add-participants-controller'
import { makeAddParticipantsRepository } from '@/tests/unitary/data/mocks/mock-participants'
import { AddParticipants } from '@/domain/usescasses/participants/add-participants'

interface SutTypes {
  validationStub: Validation
  errorHandlerStub: ErrorHandler
  addParticipantsStub: AddParticipants
  sut: Controller
}

const makeSut = (): SutTypes => {
  const validationStub = makeValidation()
  const errorHandlerStub = makeErrorHandler()
  const addParticipantsStub = makeAddParticipantsRepository()

  const sut = new AddParticipantsController(addParticipantsStub, validationStub, errorHandlerStub)

  return {
    addParticipantsStub,
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

describe('AddParticipantsController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call add with correct params', async () => {
    const { sut, addParticipantsStub } = makeSut()
    const addSpy = jest.spyOn(addParticipantsStub, 'add')
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
    const { sut, addParticipantsStub, errorHandlerStub } = makeSut()

    jest.spyOn(addParticipantsStub, 'add').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())

    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })
})
