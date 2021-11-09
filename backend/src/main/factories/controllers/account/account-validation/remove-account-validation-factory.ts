import { Validation } from '@/presentation/protocols/validations'
import { RequiredPathParamValidation, ValidationComposite } from '@/validation/validators'

export const makeRemoveAccountValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  const requiredFields = ['id']
  for (const field of requiredFields) {
    validations.push(new RequiredPathParamValidation(field))
  }

  return new ValidationComposite(validations)
}
