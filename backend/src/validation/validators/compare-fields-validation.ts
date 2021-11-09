import { InvalidParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols/validations'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareToName: string
  ) { }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldToCompareToName]) {
      return new InvalidParamError(this.fieldToCompareToName)
    }
  }
}
