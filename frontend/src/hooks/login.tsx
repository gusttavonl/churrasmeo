import { useRouter } from 'next/router'
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react'
import { toast } from 'react-toastify'
import api from '../services/api'

type User = {
  id: string
}

type AuthState = {
  token: string
  user: User
}

type LoginCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  user?: User
  login(credentials: LoginCredentials): Promise<void>
  logout(): void
}

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [origin, setOrigin] = useState('/')
  const [data, setData] = useState<AuthState | undefined>(() => {
    if (typeof window === 'undefined') return {} as AuthState

    const token = localStorage.getItem('@churrasmeo:token')
    const user = localStorage.getItem('@churrasmeo:user')

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`
      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  useEffect(() => {
    if (!data?.token && router.pathname !== '/auth') {
      setOrigin(router.pathname)
      router.replace('/auth')
      toast.error('Acesso Negado')
    }
  }, [data, router])

  const login = useCallback(
    async ({ email, password }) => {
      const response = await api.post('/login', {
        email,
        password
      })

      const { accessToken, user } = response.data
      localStorage.setItem('@churrasmeo:token', accessToken)
      api.defaults.headers.authorization = `Bearer ${accessToken}`
      router.replace(origin)

      if (!accessToken) {
        setData(undefined)
      }

      setData({ token: accessToken, user })
    },
    [origin, router]
  )

  const logout = useCallback(() => {
    localStorage.removeItem('@churrasmeo:token')
    delete api.defaults.headers.authorization
    setData(undefined)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data?.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

function useLogin(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useLogin }
