export class ServerError extends Error {
  constructor (stack: string) {
    super()
    this.message = 'Internal server error'
    this.name = 'ServerError'
    this.stack = stack
  }
}
