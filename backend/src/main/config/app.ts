import express from 'express'
import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import setupEnv from './env'
import setupPGNumberOverride from './pg-numeric-format'

const app = express()
setupMiddlewares(app)
setupRoutes(app)
setupEnv()
setupPGNumberOverride()
export default app
