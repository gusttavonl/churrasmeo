import { UpdateBarbecue } from '@/domain/usescasses/barbacue/update-account'
import { badRequest, noContent, notFound } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

export class UpdateBarbecueController implements Controller {
  constructor (
    private readonly updateBarbecue: UpdateBarbecue,
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
        account,
        description,
        information,
        date,
        value,
        participants
      } = httpRequest.body

      const affeted = await this.updateBarbecue.update(
        id,
        {
          account,
          description,
          information,
          date,
          value,
          participants
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
