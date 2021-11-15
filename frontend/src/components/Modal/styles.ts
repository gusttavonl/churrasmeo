import styled, { css } from 'styled-components'

import { motion, AnimatePresence } from 'framer-motion'

import { Close } from '@styled-icons/evaicons-solid/Close'

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

export const CloseIcon = styled(Close).attrs({
  'data-testid': 'CloseIcon'
})`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    width: 14px;
    height: 18px;

    position: absolute;
    top: 12px;
    right: 15px;
    cursor: pointer;
  `}
`

export const Wrapper = styled.div.attrs({
  id: 'WrapperModal'
})`
  background-color: rgb(45, 42, 42, 0.9);
  width: 100%;
  height: 100vh;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
`

export const Modal = styled.div`
  ${({ theme }) => css`
    box-shadow: 0 4px 8px ${theme.colors.black};
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
    min-width: 60vw;
    max-width: 80vw;
    max-height: 90vh;
  `}
`

export const DivModal = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 4px 8px ${theme.colors.black};
    border-radius: ${theme.border.radius};
    padding: 20px;
    min-width: 60vw;
    max-width: 80vw;
    max-height: 90vh;

    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: left;
  `}
`

export const TitleModal = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font: normal normal ${theme.font.bold} ${theme.font.sizes.small} / 10px
      ${theme.font.family};
    color: ${theme.colors.black};
    letter-spacing: 0px;
    margin: 0;
    padding-bottom: 8px;
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  top: 0;
`
export const Content = styled.div`
  overflow: auto;
  max-height: 80vh;
  max-width: 80vw;
  min-width: 60vw;

  @media (max-width: 800px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 450px;
  }
`
