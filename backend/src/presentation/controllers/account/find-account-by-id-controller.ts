import { FindAccountById } from '@/domain/usescasses/account/find-account-by-id'
import { ok } from '@/presentation/helpers/http/http-helper'
import { ErrorHandler } from '@/presentation/protocols'
import { HttpRequest, HttpResponse, Controller } from './account-controller-protocols'

export class FindAccountByIdController implements Controller {
  constructor (
    private readonly findAccountById: FindAccountById,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const account = await this.findAccountById.findById(id)

      return ok(account)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
