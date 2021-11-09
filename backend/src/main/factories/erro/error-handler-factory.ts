import { PG_UNIQUE_VIOLATION, PG_NOT_NULL_VIOLATION, PG_FOREIGN_KEY_VIOLATION } from '@/infra/db/utils/postgres-error-code'
import { badRequest, serverError } from '@/presentation/helpers/http/http-helper'
import { HttpResponse } from '@/presentation/protocols'
import { ErrorHandler } from '@/presentation/protocols/error-handler'

export class ErroHandlerFactory implements ErrorHandler {
  handle (error: any): HttpResponse {
    switch (error.code) {
      case (PG_UNIQUE_VIOLATION) : {
        const data = error.detail.slice(4,error.detail.length - 16)
        return badRequest({ name: 'Duplicated', message: data })
      }
      case (PG_NOT_NULL_VIOLATION) : {
        const column: string = error.column
        const table: string = error.table
        return badRequest({ name: 'NotNull', message: `Column: ${column} can't be null on ${table}` })
      }
      case (PG_FOREIGN_KEY_VIOLATION) : {
        const table: string = error.table
        return badRequest({ name: 'HasRelationship', message: `This entity is still referenced by ${table}` })
      }
      default :
        return serverError(error)
    }
  }
}
