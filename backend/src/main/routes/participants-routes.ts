import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeAddParticipantsController } from '../factories/controllers/participants/add-participants-controller-factory'
import { makeFindAllParticipantsController } from '../factories/controllers/participants/find-all-participants-controller-factory'
import { makeFindParticipantsByIdController } from '../factories/controllers/participants/find-participants-by-id-controller-factory'
import { makeRemoveParticipantsController } from '../factories/controllers/participants/remove-participants-controller-factory'
import { auth } from '../middlewares'

export default (router: Router): void => {
  router.post('/participants', auth(), adaptRoute(makeAddParticipantsController()))
  router.get('/participants-all/:id', auth(), adaptRoute(makeFindAllParticipantsController()))
  router.get('/participants/:id', auth(), adaptRoute(makeFindParticipantsByIdController()))
  router.delete('/participants/:id', auth(), adaptRoute(makeRemoveParticipantsController()))
}
