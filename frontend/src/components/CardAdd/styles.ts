import styled, { css } from 'styled-components'
import { GiBarbecue } from 'react-icons/gi'

import { motion, AnimatePresence } from 'framer-motion'

export const Animate = styled(AnimatePresence)``
export const Motion = styled(motion.div).attrs({
  transition: { ease: 'easeInOut', duration: 0.5 },
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
  'data-testid': 'motion'
})`
  position: relative;

  max-width: 80%;
  width: auto;
  margin: auto;
`

export const Wrapper = styled.div.attrs({
  'data-testid': 'WrapperCardAdd'
})`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 5;
  right: 0;
`

export const CardAdd = styled.button`
  ${({ theme }) => css`
    box-shadow: 0 4px 8pxrgba (0, 0, 0, 0.2);
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;

    &:hover {
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    }
  `}
`

export const DivCardAdd = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border-radius: ${theme.border.radius};
    padding: 20px;
    width: 300px;
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: left;
  `}
`

export const TitleCardAdd = styled.p`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: ${theme.colors.black};
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 0;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`

export const TitleContent = styled.h4`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 25px;
    color: ${theme.colors.black};
  `}
`

export const IconBarbecue = styled(GiBarbecue)`
  ${({ theme }) => css`
    font-size: 120px;
    margin: 10px;
    color: ${theme.colors.baseColorYellow};
  `}
`
