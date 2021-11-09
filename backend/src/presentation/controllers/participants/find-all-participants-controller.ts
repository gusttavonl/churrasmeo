import { FindAllParticipants } from '@/domain/usescasses/participants/find-all-participants'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class FindAllParticipantsController implements Controller {
  constructor (
    private readonly findAllParticipants: FindAllParticipants,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const participants = await this.findAllParticipants.findAll(id)

      return ok(participants)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
