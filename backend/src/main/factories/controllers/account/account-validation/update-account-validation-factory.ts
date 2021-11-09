import { Validation } from '@/presentation/protocols/validations'
import { RequiredFieldValidation, ValidationComposite } from '@/validation/validators'

export const makeUpdateAccountValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const requiredFields = ['name', 'email', 'password', 'passwordConfirmation', 'permission_group']
  for (const field of requiredFields) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
