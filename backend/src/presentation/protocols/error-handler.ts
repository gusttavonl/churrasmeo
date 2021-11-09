import { HttpResponse } from './http'

export interface ErrorHandler {
  handle: (error: any) => HttpResponse
}
