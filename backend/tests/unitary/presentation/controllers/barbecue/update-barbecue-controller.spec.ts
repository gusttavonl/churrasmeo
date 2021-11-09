import { Controller, ErrorHandler, HttpRequest, Validation } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import MockDate from 'mockdate'
import { badRequest, noContent, notFound } from '@/presentation/helpers/http/http-helper'
import { makeUpdateBarbecueRepository } from '@/tests/unitary/data/mocks/mock-barbecue'
import { UpdateBarbecueController } from '@/presentation/controllers/barbecue/update-barbecue-controller'
import { makeParticipantsModel } from '@/tests/unitary/domain/mocks/participants/participants-mocks'
import { UpdateBarbecue } from '@/domain/usescasses/barbacue/update-account'

interface SutTypes {
  validatorStub: Validation
  errorHandlerStub: ErrorHandler
  updateBarbecueStub: UpdateBarbecue
  sut: Controller
}

const makeSut = (): SutTypes => {
  const validatorStub = makeValidation()
  const errorHandlerStub = makeErrorHandler()
  const updateBarbecueStub = makeUpdateBarbecueRepository()
  const sut = new UpdateBarbecueController(updateBarbecueStub, validatorStub, errorHandlerStub)

  return {
    updateBarbecueStub,
    errorHandlerStub,
    validatorStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  body: {
    description: 'any_description',
    information: 'any_information',
    value: 1,
    participants: makeParticipantsModel(),
    date: new Date()
  },
  params: {
    id: 'any_id'
  }
})

describe('UpdateBarbecueController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call update with correct params', async () => {
    const { sut, updateBarbecueStub } = makeSut()

    const updateSpy = jest.spyOn(updateBarbecueStub, 'update')
    await sut.handle(makeParams())

    expect(updateSpy).toHaveBeenCalledWith('any_id', {
      description: 'any_description',
      information: 'any_information',
      value: 1,
      participants: makeParticipantsModel(),
      date: new Date()
    })
  })

  test('Should return badRequest if validation return an error', async () => {
    const { sut, validatorStub } = makeSut()

    jest.spyOn(validatorStub, 'validate').mockReturnValue(new Error())
    const response = await sut.handle(makeParams())

    expect(response).toEqual(badRequest(new Error()))
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, updateBarbecueStub, errorHandlerStub } = makeSut()

    jest.spyOn(updateBarbecueStub, 'update').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')
    await sut.handle(makeParams())

    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return notFound if update doesnt returns affected row quantity', async () => {
    const { sut, updateBarbecueStub } = makeSut()
    jest.spyOn(updateBarbecueStub, 'update').mockResolvedValue(0)
    const response = await sut.handle(makeParams())
    expect(response).toEqual(notFound())
  })

  test('Should return noContent on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(makeParams())

    expect(response).toEqual(noContent())
  })
})
