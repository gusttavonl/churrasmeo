import styled, { css } from 'styled-components'
import { BsPeople } from 'react-icons/bs'
import { AiOutlineDollar } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'

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
  'data-testid': 'WrapperList'
})`
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 5;
`

export const List = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    display: flex;
    align-items: center;
  `}
`

export const DivList = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 2rem;
    width: 800px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: left;

    @media (max-width: 900px) {
      width: 450px;
    }
  `}
`

export const TitleList = styled.p`
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
  flex-direction: row;
  justify-content: space-between;
`

export const HeaderLeft = styled.div``

export const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  align-items: center;
  position: relative;
  min-height: 100px;
`

export const CountParticipants = styled.h4`
  display: flex;
  flex-direction: row;
`

export const Value = styled.h4`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`

export const IconPeople = styled(BsPeople)`
  ${({ theme }) => css`
    font-size: 20px;
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
export const Table = styled.table`
  width: 100%;
`

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TableHeadName = styled.th``

export const TableHeadValue = styled.th`
  margin-left: 25px;
`

export const TableHeadRemove = styled.th``

export const TableItem = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TableName = styled.td`
  width: 70px;
`

export const TableValue = styled.td`
  width: 60px;
`

export const TableIcon = styled.td`
  width: 40px;
  cursor: pointer;
`

export const IconRemove = styled(FiTrash)`
  ${({ theme }) => css`
    font-size: 25px;
    margin-right: 5px;
    color: ${theme.colors.baseColorRed};
  `}
`
