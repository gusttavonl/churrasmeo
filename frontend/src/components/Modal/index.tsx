import * as S from './styles'
export * from './mock'
import React, { useEffect, useState } from 'react'

export type ModalProps = {
  title: string
  children?: React.ReactNode
  isOpen: boolean
  getValueOpen: (value: boolean) => void
}

const Modal = ({ children, title, isOpen, getValueOpen }: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(isOpen)

  const onOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const id = (event.target as HTMLTextAreaElement).id
    id === 'WrapperModal' && setModalOpen(false)
    id === 'WrapperModal' && getValueOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true)
      getValueOpen(true)
    } else {
      setModalOpen(false)
      getValueOpen(false)
    }
  }, [getValueOpen, isModalOpen, isOpen])

  return (
    <>
      {isModalOpen && (
        <S.Wrapper onClick={(event) => onOutsideClick(event)}>
          <S.Animate>
            <S.Motion>
              <S.Modal>
                <S.DivModal>
                  <S.Header>
                    <S.TitleModal>{title}</S.TitleModal>
                    <S.CloseIcon
                      onClick={() => {
                        setModalOpen(false)
                        getValueOpen(false)
                      }}
                    />
                  </S.Header>
                  <S.Content>{children}</S.Content>
                </S.DivModal>
              </S.Modal>
            </S.Motion>
          </S.Animate>
        </S.Wrapper>
      )}
    </>
  )
}

export default Modal
