import styled, { css } from 'styled-components'

export const TitleLogin = styled.h1`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 35px;
    margin-top: 80px;
  `}
`
