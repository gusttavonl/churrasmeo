import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { ok } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { makeFindAllParticipantsRepository } from '@/tests/unitary/data/mocks/mock-participants'
import { FindAllParticipantsController } from '@/presentation/controllers/participants/find-all-participants-controller'
import { makeParticipantsModel } from '@/tests/unitary/domain/mocks/participants/participants-mocks'
import { FindAllParticipants } from '@/domain/usescasses/participants/find-all-participants'

interface SutTypes {
  errorHandlerStub: ErrorHandler
  findParticipantsStub: FindAllParticipants
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const findParticipantsStub = makeFindAllParticipantsRepository()
  const sut = new FindAllParticipantsController(findParticipantsStub, errorHandlerStub)

  return {
    findParticipantsStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: { id: 'any_id' }
})

describe('FindParticipants', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call find with correct param', async () => {
    const { sut, findParticipantsStub } = makeSut()
    const findSpy = jest.spyOn(findParticipantsStub, 'findAll')

    await sut.handle(makeParams())
    expect(findSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, findParticipantsStub, errorHandlerStub } = makeSut()
    jest.spyOn(findParticipantsStub, 'findAll').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return ok with company debit on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(makeParams())
    expect(response).toEqual(ok([makeParticipantsModel()]))
  })
})
