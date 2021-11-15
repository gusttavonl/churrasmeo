import AuthLayout from '@/components/Layouts/AuthLayout'
import Login from '@/components/pages/auth/Login'

export default function PageAuth(): JSX.Element {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  )
}
