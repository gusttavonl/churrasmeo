import { AuthProvider } from './login'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider
