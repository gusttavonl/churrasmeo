import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validations'

export const makeParticipantsValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['barbecue', 'name', 'value', 'value_suggestion_with_drink','value_suggestion_with_out_drink']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
