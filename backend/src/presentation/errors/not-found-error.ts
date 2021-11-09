export class NotFoundError extends Error {
  constructor () {
    super()
    this.message = 'Entity not found'
    this.name = 'NotFoundError'
  }
}
