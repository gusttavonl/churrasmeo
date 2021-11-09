import { MissingPathParamError } from '@/presentation/errors'
import { Validation } from '@/presentation/protocols/validations'

export class RequiredPathParamValidation implements Validation {
  constructor (private readonly paramName: string) { }

  validate (input: any): Error {
    if (!input[this.paramName]) {
      return new MissingPathParamError(this.paramName)
    }
  }
}
