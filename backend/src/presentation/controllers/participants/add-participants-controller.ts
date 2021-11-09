import { AddParticipants } from '@/domain/usescasses/participants/add-participants'
import { badRequest, ok } from '@/presentation/helpers/http/http-helper'
import { Controller, ErrorHandler, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

export class AddParticipantsController implements Controller {
  constructor (
    private readonly addParticipants: AddParticipants,
    private readonly validation: Validation,
    private readonly errorHandler: ErrorHandler
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const {
        barbecue,
        name,
        value,
        value_suggestions_with_drink: valueSuggestionsWithDrink,
        value_suggestions_with_out_drink: valueSuggestionsWithOutDrink
      } = httpRequest.body

      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const participants = await this.addParticipants.add({
        barbecue,
        name,
        value,
        value_suggestions_with_drink: valueSuggestionsWithDrink,
        value_suggestions_with_out_drink: valueSuggestionsWithOutDrink
      })

      return ok(participants)
    } catch (error) {
      return this.errorHandler.handle(error)
    }
  }
}
