export interface RemoveAccount {
  remove: (accountId: string) => Promise<number>
}
