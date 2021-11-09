import { ErrorHandler, HttpResponse, Validation } from '../protocols'

export const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate (input: any): Error {
      return null
    }
  }
  return new ValidationStub()
}

export const makeErrorHandler = (): ErrorHandler => {
  class ErrorHandlerStub implements ErrorHandler {
    handle (error: any): HttpResponse {
      if (error) return null
      else return null
    }
  }

  return new ErrorHandlerStub()
}
