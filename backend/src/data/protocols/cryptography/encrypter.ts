export interface Encrypter {
  encrypt: (id: string) => Promise<string>
}
