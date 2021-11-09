import { InvalidParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols/validations'
import { EmailValidator } from '../protocols/email-validator'

export class EmailValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly emailValidator: EmailValidator
  ) { }

  validate (input: any): Error {
    const emailIsValid = this.emailValidator.isValid(input[this.fieldName])
    if (!emailIsValid) {
      return new InvalidParamError(this.fieldName)
    }
  }
}
