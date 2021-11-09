import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { noContent } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { makeRemoveParticipantsRepositoryStub } from '@/tests/unitary/data/mocks/mock-participants'
import { RemoveParticipantsController } from '@/presentation/controllers/participants/remove-participants-controller'
import { RemoveParticipants } from '@/domain/usescasses/participants/remove-participants'

interface SutTypes {
  removeParticipantsStub: RemoveParticipants
  errorHandlerStub: ErrorHandler
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const removeParticipantsStub = makeRemoveParticipantsRepositoryStub()
  const validationStub = makeValidation()
  const sut = new RemoveParticipantsController(removeParticipantsStub, validationStub, errorHandlerStub)

  return {
    removeParticipantsStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: {
    id: 'any_id'
  }
})

describe('RemoveParticipantsController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call removeParticipants with correct param', async () => {
    const { sut, removeParticipantsStub } = makeSut()
    const removeSpy = jest.spyOn(removeParticipantsStub, 'remove')
    await sut.handle(makeParams())
    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return noContent on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeParams())
    expect(response).toEqual(noContent())
  })

  test('Should call errorHandler if delete throws', async () => {
    const { sut,removeParticipantsStub, errorHandlerStub } = makeSut()
    jest.spyOn(removeParticipantsStub, 'remove').mockRejectedValueOnce(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalled()
  })
})
