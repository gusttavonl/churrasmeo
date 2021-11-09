import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { noContent } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { makeRemoveBarbecueRepositoryStub } from '@/tests/unitary/data/mocks/mock-barbecue'
import { RemoveBarbecueController } from '@/presentation/controllers/barbecue/remove-barbecue-controller'
import { RemoveBarbecue } from '@/domain/usescasses/barbacue/remove-account'

interface SutTypes {
  removeBarbecueStub: RemoveBarbecue
  errorHandlerStub: ErrorHandler
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const removeBarbecueStub = makeRemoveBarbecueRepositoryStub()
  const validationStub = makeValidation()
  const sut = new RemoveBarbecueController(removeBarbecueStub, validationStub, errorHandlerStub)

  return {
    removeBarbecueStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: {
    id: 'any_id'
  }
})

describe('RemoveBarbecueController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call removeBarbecue with correct param', async () => {
    const { sut, removeBarbecueStub } = makeSut()
    const removeSpy = jest.spyOn(removeBarbecueStub, 'remove')
    await sut.handle(makeParams())
    expect(removeSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return noContent on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeParams())
    expect(response).toEqual(noContent())
  })

  test('Should call errorHandler if delete throws', async () => {
    const { sut,removeBarbecueStub, errorHandlerStub } = makeSut()
    jest.spyOn(removeBarbecueStub, 'remove').mockRejectedValueOnce(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalled()
  })
})
