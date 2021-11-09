export class AccessDeniedError extends Error {
  constructor () {
    super()
    this.name = 'AccessDeniedError'
    this.message = 'Access denied'
  }
}
