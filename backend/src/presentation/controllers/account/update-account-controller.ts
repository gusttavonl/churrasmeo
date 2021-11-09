import { badRequest, noContent, notFound } from '@/presentation/helpers/http/http-helper'
import { ErrorHandler } from '@/presentation/protocols'
import { HttpRequest, HttpResponse, Controller, UpdateAccount, Validation } from './account-controller-protocols'

export class UpdateAccountController implements Controller {
  constructor (
    private readonly updateAccount: UpdateAccount,
    private readonly validation: Validation,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { id } = httpRequest.params

      const {
        name,
        email,
        password
      } = httpRequest.body

      const affeted = await this.updateAccount.update(
        id,
        {
          name,
          email,
          password
        }
      )

      if (!affeted) {
        return notFound()
      }

      return noContent()
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
