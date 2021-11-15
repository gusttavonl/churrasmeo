/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useLogin } from '@/hooks/login'
import React, { useCallback, useState } from 'react'

import { useForm } from 'react-hook-form'
import * as S from './styles'

type LoginForm = {
  email: string
  password: string
}

const Login = () => {
  const { handleSubmit } = useForm<LoginForm>()
  const [emailForm, setEmailForm] = useState('')
  const [passwordForm, setPasswordForm] = useState('')
  const { login } = useLogin()

  const handleSubmitLogin = useCallback(() => {
    login({
      email: emailForm,
      password: passwordForm
    })
  }, [emailForm, login, passwordForm])

  return (
    <S.Container>
      <S.Content>
        <S.LoginForm onSubmit={handleSubmit(handleSubmitLogin)}>
          <Input
            label="Login"
            type="email"
            onInputChange={setEmailForm}
            placeholder="Digite o email"
            required
          />

          <Input
            label="Senha"
            type="password"
            onInputChange={setPasswordForm}
            placeholder="Digite a senha"
            required
          />

          <Button typeStyle="enter" type="submit">
            Entrar
          </Button>
        </S.LoginForm>
      </S.Content>
    </S.Container>
  )
}

export default Login
