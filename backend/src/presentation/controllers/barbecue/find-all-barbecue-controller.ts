import { FindAllBarbecue } from '@/domain/usescasses/barbacue/find-all-barbecue'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class FindAllBarbecueController implements Controller {
  constructor (
    private readonly findAllBarbecue: FindAllBarbecue,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const barbecue = await this.findAllBarbecue.findAll(id)

      return ok(barbecue)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
