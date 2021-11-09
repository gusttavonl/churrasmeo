import { Router } from 'express'
import { adaptRoute } from '../adapters/express/express-route-adapter'
import { makeAddBarbecueController } from '../factories/controllers/barbecue/add-barbecue-controller-factory'
import { makeFindAllBarbecueController } from '../factories/controllers/barbecue/find-all-barbecue-controller-factory'
import { makeFindBarbecueByIdController } from '../factories/controllers/barbecue/find-barbecue-by-id-controller-factory'
import { makeRemoveBarbecueController } from '../factories/controllers/barbecue/remove-barbecue-controller-factory'
import { makeUpdateBarbecueController } from '../factories/controllers/barbecue/update-barbecue-controller-factory'
import { auth } from '../middlewares'

export default (router: Router): void => {
  router.post('/barbecue', auth(), adaptRoute(makeAddBarbecueController()))
  router.get('/barbecue', auth(), adaptRoute(makeFindAllBarbecueController()))
  router.get('/barbecue/:id', auth(), adaptRoute(makeFindBarbecueByIdController()))
  router.put('/barbecue/:id', auth(), adaptRoute(makeUpdateBarbecueController()))
  router.delete('/barbecue/:id', auth(), adaptRoute(makeRemoveBarbecueController()))
}
