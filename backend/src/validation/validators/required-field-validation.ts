import { MissingParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols/validations'

export class RequiredFieldValidation implements Validation {
  constructor (private readonly fieldName: string) { }

  validate (input: any): Error {
    if (input[this.fieldName] === undefined) {
      return new MissingParamError(this.fieldName)
    }
  }
}
