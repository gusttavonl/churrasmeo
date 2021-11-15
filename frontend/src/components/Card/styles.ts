import styled, { css } from 'styled-components'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineDollar } from 'react-icons/ai'

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
  'data-testid': 'WrapperCard'
})`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 5;
  right: 0;
`

export const Card = styled.button`
  ${({ theme }) => css`
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

export const DivCard = styled.div`
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

export const TitleCard = styled.p`
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

  top: 0;
`

export const Date = styled.h2`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 33px;
    color: ${theme.colors.baseColorYellow};
  `}
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  height: 100px;
`

export const CountParticipants = styled.h4`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`

export const Value = styled.h4`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  right: 0;
`

export const IconPeople = styled(BsPeople)`
  ${({ theme }) => css`
    font-size: 18px;
    margin-right: 5px;
    color: ${theme.colors.baseColorYellow};
  `}
`

export const IconDollar = styled(AiOutlineDollar)`
  ${({ theme }) => css`
    font-size: 18px;
    margin-right: 5px;
    color: ${theme.colors.baseColorYellow};
  `}
`
