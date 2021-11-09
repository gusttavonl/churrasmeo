import jwt from 'jsonwebtoken'
import { Encrypter } from '@/data/protocols/cryptography/encrypter'
import { Decrypter } from '@/data/protocols/cryptography/decrypter'
import { EnumObject } from '@/domain/enums/enum-object'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) { }

  async encrypt (id: string, role: EnumObject | number): Promise<string> {
    return jwt.sign({ id, role }, this.secret, { expiresIn: '30 days' })
  }

  async decrypt (token: string): Promise<string> {
    try {
      const tokenValue = token.startsWith('Bearer') ? token.split(' ')[1] : token
      const value: any = jwt.verify(tokenValue, this.secret)
      return value
    } catch (error) {
      return error
    }
  }
}
