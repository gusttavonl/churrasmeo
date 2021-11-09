export class BadRequestError extends Error {
  constructor (message: string) {
    super()
    this.name = 'BadRequestError'
    this.message = message
  }
}
