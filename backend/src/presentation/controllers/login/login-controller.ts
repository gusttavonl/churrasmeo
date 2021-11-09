import { badRequest, ok, unauthorizedError } from '@/presentation/helpers/http/http-helper'
import { ErrorHandler, Validation } from '../account/account-controller-protocols'
import { Controller, HttpRequest, HttpResponse, Authentication } from './login-controller-protocols'

export class LoginController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly authentication: Authentication,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }
      const { email, password } = httpRequest.body

      const authData = await this.authentication.auth({ email, password })
      if (!authData || !authData.accessToken) {
        return unauthorizedError()
      }

      return ok(authData)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
