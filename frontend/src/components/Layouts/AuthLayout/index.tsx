import * as S from './styles'

type AuthLayoutProps = {
  children: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <S.TitleLogin>Agenda de Churras</S.TitleLogin>
      {children}
    </>
  )
}

export default AuthLayout
