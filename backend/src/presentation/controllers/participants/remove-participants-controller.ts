import { RemoveParticipants } from '@/domain/usescasses/participants/remove-participants'
import { badRequest, noContent, notFound } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

export class RemoveParticipantsController implements Controller {
  constructor (
    private readonly removeParticipants: RemoveParticipants,
    private readonly validation: Validation,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.params)
      if (error) {
        return badRequest(error)
      }

      const { id } = httpRequest.params
      const affected = await this.removeParticipants.remove(id)

      if (!affected) {
        return notFound()
      }

      return noContent()
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
