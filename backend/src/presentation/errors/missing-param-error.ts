export class MissingParamError extends Error {
  constructor (paramName: string) {
    super()
    this.name = 'MissingParamError'
    this.message = `Missing param: ${paramName}`
  }
}
