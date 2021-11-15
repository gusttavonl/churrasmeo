import styled from 'styled-components'
import CardAdd from '@/components/CardAdd'
import BarbecueList from './BarbebuceList'

export const Container = styled.div`
  height: 70vh;
  width: 100vw;
`

export const Header = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Cardies = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 320px));
  grid-row-gap: 10px;
  justify-content: center;

  @media (max-width: 600px) {
    margin-right: 30px;
  }
`

export const CardAddComponent = styled(CardAdd)``

export const BarbecueListComponent = styled(BarbecueList)``
