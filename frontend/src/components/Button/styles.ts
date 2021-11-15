import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

const buttonsModifiers = {
  enter: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
  `,

  save: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.baseColorYellow};
    color: ${theme.colors.white};
  `,

  add: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.baseColorYellow};
    color: ${theme.colors.white};
  `,

  cancel: (theme: DefaultTheme) => css`
    border: 1px solid ${theme.colors.black};
    background-color: transparent;
    color: ${theme.colors.black};
  `,

  delete: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.baseColorRed};
    color: ${theme.colors.white};
  `
}

export const ButtonWrapper = styled.button.attrs({
  'data-testid': 'ButtonWrapper'
})<ButtonProps>`
  ${({ typeStyle, theme, disabled }) => css`
    font-family: ${theme.font.family};
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    padding: 14px 100px;

    border-radius: 5px;
    cursor: pointer;
    letter-spacing: 0;
    border: none;
    margin: 10px 0;

    &:hover {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    ${disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.7;
    `}

    ${typeStyle && buttonsModifiers[typeStyle](theme)};
  `}
`

export const Content = styled.div``
