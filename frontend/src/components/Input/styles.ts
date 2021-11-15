import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

const inputModifiers = {
  errorInput: (theme: DefaultTheme) => css`
    border: 0.0625rem solid ${theme.colors.baseColorRed};
  `
}

export const Wrapper = styled.main.attrs({
  id: 'WrapperInput'
})``

export const Label = styled.label`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.semiBold};
    font-size: 16px;
    line-height: 25px;

    display: flex;
    align-items: center;

    color: ${theme.colors.black};
  `}
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  position: relative;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input<InputProps>`
  ${({ theme, error }) => css`
    padding: 20px 16px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.lightGray};
    box-sizing: border-box;
    border-radius: 7px;
    height: fit-content;
    width: 282px;

    margin: 5px 0;

    ${!!error && inputModifiers.errorInput(theme)}

    ::placeholder {
      font-family: ${theme.font.family};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: ${theme.colors.black};
    }

    :-ms-input-placeholder {
      font-family: ${theme.font.family};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: ${theme.colors.black};
    }

    ::-ms-input-placeholder {
      font-family: ${theme.font.family};
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 21px;

      color: ${theme.colors.black};
    }
  `}
`

export const Error = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: ${theme.font.normal};
    font-size: 14px;
    line-height: 16px;

    display: flex;
    align-items: center;

    color: ${theme.colors.baseColorRed};
  `}
`
