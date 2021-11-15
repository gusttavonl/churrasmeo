import styled, { css } from 'styled-components'

export const Container = styled.div``

export const TitleHeader = styled.h1`
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

export const Header = styled.div``

export const Body = styled.div`
  width: 100%;
`
