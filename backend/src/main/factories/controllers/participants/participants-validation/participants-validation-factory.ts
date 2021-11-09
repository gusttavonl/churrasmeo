import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validations'

export const makeParticipantsValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['account', 'description', 'information', 'date']) {
    validations.push(new RequiredFieldValidation(field))
  }
  return new ValidationComposite(validations)
}
