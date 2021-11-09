export interface RemoveAccountRepository {
  remove: (accountId: string) => Promise<number>
}
