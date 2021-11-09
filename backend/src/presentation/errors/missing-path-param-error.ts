export class MissingPathParamError extends Error {
  constructor (paramName: string) {
    super()
    this.name = 'MissingPathParamError'
    this.message = `Missing path param: ${paramName}`
  }
}
