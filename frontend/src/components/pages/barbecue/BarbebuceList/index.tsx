import { BarbecueModel } from '@/services/models/barbecue'
import { useEffect, useState } from 'react'
import BarbecueDetail from '../BarbecueDetail'
import * as S from './styles'

type BarbecueListProps = {
  loadBarbecues: () => void
  barbecues: BarbecueModel[]
}

const BarbecueList = ({ loadBarbecues, barbecues }: BarbecueListProps) => {
  const [isModalBarbecueDetailOpen, setIsModalBarbecueDetailOpen] =
    useState(false)

  const [barbecue, setBarbecue] = useState<BarbecueModel>()

  const getValueOpen = (value: boolean) => {
    setIsModalBarbecueDetailOpen(value)
  }

  useEffect(() => {
    getValueOpen(isModalBarbecueDetailOpen)
  }, [isModalBarbecueDetailOpen])
  return (
    <>
      {barbecue && (
        <BarbecueDetail
          barbecue={barbecue!}
          getValueOpen={getValueOpen}
          isOpen={isModalBarbecueDetailOpen}
          loadBarbecues={loadBarbecues}
        />
      )}
      {barbecues.map((barbecue) => (
        <>
          <S.CardComponent
            participants={barbecue.participants}
            countParticipants={barbecue.participants.length}
            title={barbecue.description}
            date={barbecue.date}
            onClick={() => {
              setBarbecue(barbecue)
              setIsModalBarbecueDetailOpen(true)
            }}
          />
        </>
      ))}
    </>
  )
}

export default BarbecueList
