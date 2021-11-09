import { EmailValidation, CompareFieldsValidation, RequiredFieldValidation, ValidationComposite } from '@/validation/validators'
import { EmailValidatorAdapter } from '@/infra/validators/email/email-validator-adapter'
import { Validation } from '@/presentation/protocols/validations'

export const makeAccountValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
