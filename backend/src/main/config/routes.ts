import { Express, Router } from 'express'
import authRoutes from '../routes/auth-routes'
import barbecueRoutes from '../routes/barbecue-routes'
import participantsRoutes from '../routes/participants-routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)
  authRoutes(router)
  barbecueRoutes(router)
  participantsRoutes(router)
}
