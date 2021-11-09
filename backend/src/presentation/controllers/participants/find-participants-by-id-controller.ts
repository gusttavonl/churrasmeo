import { FindParticipantsById } from '@/domain/usescasses/participants/find-participants-by-id'
import { ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse } from '@/presentation/protocols'

export class FindParticipantsByIdController implements Controller {
  constructor (
    private readonly findParticipantsById: FindParticipantsById,
    private readonly erroHandle: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.params
      const participants = await this.findParticipantsById.findById(id)

      return ok(participants)
    } catch (error) {
      return this.erroHandle.handle(error)
    }
  }
}
