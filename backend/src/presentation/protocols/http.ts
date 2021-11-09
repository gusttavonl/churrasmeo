export interface HttpResponse {
  statusCode: number
  body: any
}

export interface HttpRequest {
  headers?: any
  body?: any
  query?: any
  params?: any
  accountId?: string
  accountEntityId?: string
  accountRole?: {
    description: string
    value: number
  }
}
