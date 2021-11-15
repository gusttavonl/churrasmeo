import Modal from '@/components/Modal'
import List from '@/components/List'
import { useCallback, useEffect, useState } from 'react'
import ParticipantsAdd from '../../participants/ParticipantsAdd'
import Button from '@/components/Button'
import * as S from './styles'
import { ParticipantsModel } from '@/services/models/participants'
import api from '@/services/api'
import { toast } from 'react-toastify'
import { BarbecueModel } from '@/services/models/barbecue'

export type BarbecueProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  barbecue: BarbecueModel
  loadBarbecues: () => void
}

const BarbecueDetail = ({
  isOpen,
  getValueOpen,
  barbecue,
  loadBarbecues
}: BarbecueProps) => {
  const [isModalParticipantsAddOpen, setIsModalParticipantsAddOpen] =
    useState(false)

  const [participants, setParticipants] = useState<ParticipantsModel[]>([])

  const getValueOpenModalParticipantsAdd = (value: boolean) => {
    setIsModalParticipantsAddOpen(value)
  }

  const handleLoadParticipants = useCallback(async () => {
    try {
      const response = await api.get(`/participants-all/${barbecue.id}`)
      setParticipants(response.data)
    } catch (error) {
      toast.error('Erro ao listar os participants')
    }
  }, [barbecue?.id])

  useEffect(() => {
    handleLoadParticipants()
    getValueOpenModalParticipantsAdd(isModalParticipantsAddOpen)
  }, [handleLoadParticipants, isModalParticipantsAddOpen])

  const handleRemoveParticipant = useCallback(
    async (id: string) => {
      try {
        await api.delete(`/participants/${id}`)

        loadBarbecues()
        handleLoadParticipants()

        toast.success('Participante excluído com sucesso!')
      } catch (error) {
        loadBarbecues()
        handleLoadParticipants()
      }
    },
    [handleLoadParticipants, loadBarbecues]
  )

  const handleToggleModalParticipantsAdd = useCallback(() => {
    setIsModalParticipantsAddOpen(!isModalParticipantsAddOpen)
    handleLoadParticipants()
    loadBarbecues()
  }, [handleLoadParticipants, isModalParticipantsAddOpen, loadBarbecues])

  return (
    <>
      <Modal
        title="Detalhes do churras"
        isOpen={isOpen}
        getValueOpen={getValueOpen}
      >
        <S.ActionArea>
          <Button
            typeStyle="add"
            onClick={() => setIsModalParticipantsAddOpen(true)}
          >
            Adicionar Participante
          </Button>
        </S.ActionArea>
        <S.Content>
          <List
            date={barbecue?.date}
            title={barbecue?.description}
            countParticipants={participants.length}
            onRemove={handleRemoveParticipant}
            participants={participants}
          />
        </S.Content>
      </Modal>
      <ParticipantsAdd
        barbecueId={barbecue?.id}
        getValueOpen={getValueOpenModalParticipantsAdd}
        isOpen={isModalParticipantsAddOpen}
        loadBarbecue={loadBarbecues}
        onClose={handleToggleModalParticipantsAdd}
      />
    </>
  )
}

export default BarbecueDetail
