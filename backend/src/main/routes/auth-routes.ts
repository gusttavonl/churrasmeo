/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeAddAccountController } from '../factories/controllers/account/add-account-controller-factory'
import { makeLoginController } from '../factories/controllers/login/login-controller-factory'
import { makeFindAccountByIdController } from '../factories/controllers/account/find-account-by-id-controller-factory'
import { makeRemoveAccountController, makeUpdateAccountController } from '../factories/controllers/account/account-controller-protocols'
import { auth } from '../middlewares'

export default (router: Router): void => {
  router.post('/login', adaptRoute(makeLoginController()))

  router.post('/account', adaptRoute(makeAddAccountController()))

  router.get('/account/:id', auth(), adaptRoute(makeFindAccountByIdController()))
  router.put('/account/:id', auth(), adaptRoute(makeUpdateAccountController()))
  router.delete('/account/:id', auth(), adaptRoute(makeRemoveAccountController()))
}
