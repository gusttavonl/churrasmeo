export interface Decrypter {
  decrypt: (value: string) => Promise<object | string>
}
