import { Validation } from '@/presentation/protocols/validations'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeUpdateBarbecueValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const requiredFields = ['account', 'description', 'information', 'date', 'value', 'participants']
  for (const field of requiredFields) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
