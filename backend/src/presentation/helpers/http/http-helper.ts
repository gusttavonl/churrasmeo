import { HttpResponse } from '@/presentation/protocols/http'
import { AccessDeniedError, ServerError, UnauthorizedError } from '@/presentation/errors'
import { NotFoundError } from '@/presentation/errors/not-found-error'
import { BadRequestError } from '@/presentation/errors/bad-request-error'

export const badRequest = (error: String | Error): HttpResponse => ({
  statusCode: 400,
  body: typeof error === 'string' ? new BadRequestError(error) : error
})

export const forbidden = (): HttpResponse => ({
  statusCode: 403,
  body: new AccessDeniedError()
})

export const unauthorizedError = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const created = (data: any): HttpResponse => ({
  statusCode: 201,
  body: data
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  body: null
})

export const notFound = (): HttpResponse => ({
  statusCode: 404,
  body: new NotFoundError()
})
