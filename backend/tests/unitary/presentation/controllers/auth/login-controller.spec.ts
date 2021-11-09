
import { Controller, ErrorHandler, HttpRequest } from '@/presentation/protocols'
import { makeErrorHandler, makeValidation } from '@/tests/unitary/presentation/mocks/controller-helpers'
import { ok } from '@/presentation/helpers/http/http-helper'
import MockDate from 'mockdate'
import { LoginController } from '@/presentation/controllers/login/login-controller'
import { makeLoginStub } from '../../mocks/auth/login'
import { Authentication } from '@/domain/usescasses/authentication'
import { makeAuthResponse } from '@/tests/unitary/domain/mocks/auth/auth'

interface SutTypes {
  errorHandlerStub: ErrorHandler
  loginStub: Authentication
  sut: Controller
}

const makeSut = (): SutTypes => {
  const errorHandlerStub = makeErrorHandler()
  const validationStub = makeValidation()
  const loginStub = makeLoginStub()
  const sut = new LoginController(validationStub, loginStub, errorHandlerStub)

  return {
    loginStub,
    errorHandlerStub,
    sut
  }
}

const makeParams = (): HttpRequest => ({
  body: {
    email: 'any_email',
    password: 'any_password'
  }
})

describe('LoginController', () => {
  beforeAll(() => MockDate.set(new Date()))
  afterAll(() => MockDate.reset())
  test('Should call find with correct values', async () => {
    const { sut, loginStub } = makeSut()
    const findSpy = jest.spyOn(loginStub, 'auth')
    await sut.handle(makeParams())

    expect(findSpy).toHaveBeenCalledWith({ email: 'any_email', password: 'any_password' })
  })

  test('Should return ok with correct response on success', async () => {
    const { sut } = makeSut()
    const response = await sut.handle(makeParams())

    expect(response).toEqual(ok(makeAuthResponse()))
  })
})
