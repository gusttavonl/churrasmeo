import { AddBarbecue } from '@/domain/usescasses/barbacue/add-barbecue'
import { badRequest, ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

export class AddBarbecueController implements Controller {
  constructor (
    private readonly addBarbecue: AddBarbecue,
    private readonly validation: Validation,
    private readonly errorHandler: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        account,
        description,
        information,
        date
      } = httpRequest.body

      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const barbecue = await this.addBarbecue.add({
        account,
        description,
        information,
        date
      })

      return ok(barbecue)
    } catch (error) {
      return this.errorHandler.handle(error)
    }
  }
}
