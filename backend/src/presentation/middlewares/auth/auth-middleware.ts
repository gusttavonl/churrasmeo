import { FindAccountByToken } from '@/domain/usescasses/account/find-account-by-token'
import { forbidden, ok, serverError } from '@/presentation/helpers/http/http-helper'
import { HttpRequest, HttpResponse } from '@/presentation/protocols'
import { Middleware } from '@/presentation/protocols/middleware'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly findAccountByToken: FindAccountByToken
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.authorization

      if (accessToken) {
        const account = await this.findAccountByToken.find(accessToken)

        if (account) {
          return ok({ accountId: account.id })
        }
      }

      return forbidden()
    } catch (error) {
      return serverError(error)
    }
  }
}
