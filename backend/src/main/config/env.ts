
import dotenv from 'dotenv-flow'
export default (): void => {
  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
    dotenv.config()
  }
}
