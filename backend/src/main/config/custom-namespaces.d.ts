declare namespace Express {
  interface Request {
    accountId?: string
    accountEntityId?: string
    accountRole?: {
      description: string
      value: number
    }
  }
}
