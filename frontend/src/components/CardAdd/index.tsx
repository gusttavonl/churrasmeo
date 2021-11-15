import * as S from './styles'
export * from './mock'
import React from 'react'

export type TypeCardAdd = 'success' | 'error'

export type CardAddProps = {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const CardAdd = ({ onClick }: CardAddProps) => {
  return (
    <S.Wrapper>
      <S.Animate>
        <S.Motion>
          <S.CardAdd onClick={onClick}>
            <S.DivCardAdd>
              <S.Header>
                <S.IconBarbecue />
              </S.Header>
              <S.Content>
                <S.TitleContent>Adicionar Churras</S.TitleContent>
              </S.Content>
            </S.DivCardAdd>
          </S.CardAdd>
        </S.Motion>
      </S.Animate>
    </S.Wrapper>
  )
}

export default CardAdd
