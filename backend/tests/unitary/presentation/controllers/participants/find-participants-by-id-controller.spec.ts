import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { ok } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { makeParticipantsByIdRepository } from '@/tests/unitary/data/mocks/mock-participants'
import { FindParticipantsByIdController } from '@/presentation/controllers/participants/find-participants-by-id-controller'
import { makeParticipantsModel } from '@/tests/unitary/domain/mocks/participants/participants-mocks'
import { FindParticipantsById } from '@/domain/usescasses/participants/find-participants-by-id'

interface SutTypes {
  errorHandlerStub: ErrorHandler
  findParticipantsByIdStub: FindParticipantsById
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const findParticipantsByIdStub = makeParticipantsByIdRepository()
  const sut = new FindParticipantsByIdController(findParticipantsByIdStub, errorHandlerStub)

  return {
    findParticipantsByIdStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  params: { id: 'any_id' }
})

describe('FindParticipantsById', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())

  test('Should call findById with correct param', async () => {
    const { sut, findParticipantsByIdStub } = makeSut()
    const findSpy = jest.spyOn(findParticipantsByIdStub, 'findById')

    await sut.handle(makeParams())
    expect(findSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should call errorHandler if controller throws', async () => {
    const { sut, findParticipantsByIdStub, errorHandlerStub } = makeSut()
    jest.spyOn(findParticipantsByIdStub, 'findById').mockRejectedValue(new Error())
    const handleSpy = jest.spyOn(errorHandlerStub, 'handle')

    await sut.handle(makeParams())
    expect(handleSpy).toHaveBeenCalledWith(new Error())
  })

  test('Should return ok with company debit on success', async () => {
    const { sut } = makeSut()

    const response = await sut.handle(makeParams())
    expect(response).toEqual(ok(makeParticipantsModel()))
  })
})
