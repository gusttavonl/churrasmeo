import request from 'supertest'
import app from '@/main/config/app'

jest.mock('@/infra/db/postgres/modules/account/account-repository', () => ({
  AccountRepository: jest.fn().mockReturnValue({
    findByEmail: () => ({
      email: 'any@email.com',
      name: 'any_name',
      password: 'any_password'
    })
  })
}))

jest.mock('@/infra/cryptography/brcrypt-adapter/bcrypt-adapter', () => ({
  BcryptAdapter: jest.fn().mockReturnValue({
    compare: () => true
  })
}))

jest.mock('@/infra/cryptography/jwt-adapter/jwt-adapter', () => ({
  JwtAdapter: jest.fn().mockReturnValue({
    encrypt: () => 'any_access_token'
  })
}))
describe('Login', () => {
  test('Should be login success', async () => {
    const response = await request(app).post('/login').send({
      email: 'admin@email.com',
      password: 'admin'
    })

    expect(response.status).toBe(200)
    expect(response.body).toEqual({
      user: {
        email: 'any@email.com',
        name: 'any_name'
      },
      accessToken: 'any_access_token'
    })
  })

  test('Should be login failed', async () => {
    const response = await request(app).post('/login').send({
      email: 'admin@email.com'
    })

    expect(response.status).toBe(400)
  })
})
