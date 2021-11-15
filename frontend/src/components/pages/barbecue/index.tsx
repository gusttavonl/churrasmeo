import { useLogin } from '@/hooks/login'
import api from '@/services/api'
import { BarbecueModel } from '@/services/models/barbecue'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import BarbecueAdd from './BarbecueAdd'
import * as S from './styles'

const Barbecue = () => {
  const { user } = useLogin()
  const [isModalBarbecueAddOpen, setIsModalBarbecueAddOpen] = useState(false)
  const [barbecues, setBarbecues] = useState<BarbecueModel[]>([])

  const getValueOpen = (value: boolean) => {
    setIsModalBarbecueAddOpen(value)
  }

  const loadBarbecues = useCallback(async (): Promise<void> => {
    try {
      const response = await api.get(`/barbecue-all/${user?.id}`)
      setBarbecues(response.data)
    } catch (error) {
      toast.error('Erro ao listar os churrascos.')
    }
  }, [user?.id])

  const handleToggleModalBarbecueAdd = useCallback(() => {
    setIsModalBarbecueAddOpen(!isModalBarbecueAddOpen)
  }, [isModalBarbecueAddOpen])

  useEffect(() => {
    getValueOpen(isModalBarbecueAddOpen)
    loadBarbecues()
  }, [isModalBarbecueAddOpen, loadBarbecues])

  return (
    <S.Container>
      <BarbecueAdd
        isOpen={isModalBarbecueAddOpen}
        onClose={handleToggleModalBarbecueAdd}
        getValueOpen={getValueOpen}
        loadBarbecues={loadBarbecues}
      />
      <S.Cardies>
        <S.CardAddComponent
          onClick={() => {
            setIsModalBarbecueAddOpen(true)
          }}
        />
        <S.BarbecueListComponent
          barbecues={barbecues}
          loadBarbecues={loadBarbecues}
        />
      </S.Cardies>
    </S.Container>
  )
}

export default Barbecue
