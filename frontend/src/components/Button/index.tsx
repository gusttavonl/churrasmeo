import React, { ButtonHTMLAttributes } from 'react'
import * as S from './styles'
export * from './mock'

export type TypeButton = 'enter' | 'save' | 'add' | 'cancel' | 'delete'

export type ButtonProps = {
  children?: React.ReactNode
  disabled?: boolean
  typeStyle?: TypeButton
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  disabled = false,
  typeStyle,
  onClick,
  ...buttonHTMLProps
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      disabled={disabled}
      onClick={onClick}
      typeStyle={typeStyle}
      {...buttonHTMLProps}
    >
      <S.Content>{children}</S.Content>
    </S.ButtonWrapper>
  )
}

export default Button
