import { Request, Response } from 'express'
import { Controller, HttpRequest, HttpResponse } from '@/presentation/protocols'

export const adaptRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body,
      query: request.query,
      params: request.params,
      headers: request.header,
      accountId: request.accountId,
      accountEntityId: request.accountEntityId,
      accountRole: request.accountRole
    }

    const httpResponse: HttpResponse = await controller.handle(httpRequest)

    if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
      response.status(httpResponse.statusCode).json(httpResponse.body)
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body
      })
    }
  }
}
