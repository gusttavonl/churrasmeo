import { FindBarbecueById } from '@/domain/usescasses/barbacue/find-barbecue-by-id'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class FindBarbecueByIdController implements Controller {
  constructor (
    private readonly findBarbecueById: FindBarbecueById,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const barbecue = await this.findBarbecueById.findById(id)

      return ok(barbecue)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
