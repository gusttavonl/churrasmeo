import * as S from './styles'
export * from './mock'
import React from 'react'
import { formatData, sumValues } from '@/utils/helpers'
import { ParticipantsModel } from '@/services/models/participants'

export type TypeCard = 'success' | 'error'

export type CardProps = {
  date: Date
  title: string
  countParticipants: number
  participants: ParticipantsModel[]
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Card = ({
  date,
  title,
  countParticipants,
  participants,
  onClick
}: CardProps) => {
  const participantsValues = participants.map(
    (participant) => participant.value
  )
  return (
    <S.Wrapper>
      <S.Animate>
        <S.Motion>
          <S.Card onClick={onClick}>
            <S.DivCard>
              <S.Header>
                <S.Date>{formatData(date.toString())}</S.Date>
                <S.TitleCard>{title}</S.TitleCard>
              </S.Header>
              <S.Content>
                <S.CountParticipants>
                  <S.IconPeople /> {countParticipants}
                </S.CountParticipants>
                <S.Value>
                  <S.IconDollar />
                  {sumValues(participantsValues)}
                </S.Value>
              </S.Content>
            </S.DivCard>
          </S.Card>
        </S.Motion>
      </S.Animate>
    </S.Wrapper>
  )
}

export default Card
