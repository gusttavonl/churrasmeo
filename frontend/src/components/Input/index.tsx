/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'
export * from './mock'

type TypeInput = 'text' | 'email' | 'password' | 'number' | 'date'

export type InputProps = {
  onInputChange?: (value: any) => void
  type: TypeInput
  label?: string
  placeholder: string
  disabled?: boolean
  error?: string
  required?: boolean
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  type,
  label,
  placeholder,
  name,
  error,
  disabled,
  onInputChange,
  required
}: InputProps) => {
  const [value, setValue] = useState<any>()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.InputWrapper>
        <S.Input
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          name={name}
          label={label}
          error={error}
          required={required}
        />
      </S.InputWrapper>
      <S.Error>{error}</S.Error>
    </S.Wrapper>
  )
}

export default Input
