import * as S from './styles'
export * from './mock'
import React from 'react'
import { ParticipantsModel } from '@/services/models/participants'
import { formatData } from '@/utils/helpers'
export type TypeList = 'success' | 'error'

export type ListProps = {
  date: Date
  title: string
  countParticipants: number
  participants: ParticipantsModel[]
  onRemove: (id: string) => void
}

const List = ({
  date,
  title,
  countParticipants,
  participants,
  onRemove
}: ListProps) => {
  return (
    <S.Wrapper>
      <S.Animate>
        <S.Motion>
          <S.List>
            <S.DivList>
              <S.Header>
                <S.HeaderLeft>
                  <S.Date>{formatData(date.toString())}</S.Date>
                  <S.TitleList>{title}</S.TitleList>
                </S.HeaderLeft>
                <S.HeaderRight>
                  <S.CountParticipants>
                    <S.IconPeople /> {countParticipants}
                  </S.CountParticipants>
                </S.HeaderRight>
              </S.Header>
              <S.Content>
                <S.Table>
                  <S.TableHeader>
                    <S.TableHeadName>Nome</S.TableHeadName>
                    <S.TableHeadValue>Valor</S.TableHeadValue>
                    <S.TableHeadRemove>Excluir</S.TableHeadRemove>
                  </S.TableHeader>

                  {participants.map((participant) => (
                    <S.TableItem key={participant.id}>
                      <S.TableName>{participant.name}</S.TableName>
                      <S.TableValue>R$ {participant.value}</S.TableValue>
                      <S.TableIcon onClick={() => onRemove(participant.id)}>
                        <S.IconRemove />
                      </S.TableIcon>
                    </S.TableItem>
                  ))}
                </S.Table>
              </S.Content>
            </S.DivList>
          </S.List>
        </S.Motion>
      </S.Animate>
    </S.Wrapper>
  )
}

export default List
