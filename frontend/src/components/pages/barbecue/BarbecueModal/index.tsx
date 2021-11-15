import Button from '@/components/Button'
import Input from '@/components/Input'
import { useLogin } from '@/hooks/login'
import api from '@/services/api'
import { BarbecueAddParams } from '@/services/models/barbecue'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as S from './styles'

type BarbecueForm = {
  description: string
  information: string
  date: string
}

type BarbecueModalProps = {
  loadBarbecues: () => void
  onClose: () => void
}

const BarbecueModal = ({ loadBarbecues, onClose }: BarbecueModalProps) => {
  const { handleSubmit } = useForm<BarbecueForm>()
  const { user } = useLogin()

  const [description, setDescription] = useState('')
  const [information, setInformation] = useState('')
  const [date, setDate] = useState<Date>(new Date())

  const handleSubmitBarbecue = useCallback(async (): Promise<void> => {
    try {
      const barbecue: BarbecueAddParams = {
        account: { id: user?.id || '' },
        description: description,
        information: information,
        date: date
      }

      await api.post('/barbecue', barbecue)
      loadBarbecues()
      onClose()

      toast.success('Churrasco salvo com Sucesso')
    } catch (error) {
      toast.error('Erro ao salvar churrasco')
    }
  }, [date, description, information, loadBarbecues, onClose, user?.id])

  return (
    <S.Container>
      <S.BarbecueForm onSubmit={handleSubmit(handleSubmitBarbecue)}>
        <S.BarbecueFormInputies>
          <Input
            label="Descrição"
            type="text"
            onInputChange={setDescription}
            placeholder="Digite a descrição do churrasco"
            required
          />

          <Input
            label="Informações adicionais"
            type="text"
            onInputChange={setInformation}
            placeholder="Digite as informações adicionais"
            required
          />

          <Input
            label="Data"
            type="date"
            onInputChange={setDate}
            placeholder="Digite a data do churrasco"
            required
          />
        </S.BarbecueFormInputies>

        <S.BarbecueFormButton>
          <Button typeStyle="save" type="submit">
            Salvar
          </Button>
        </S.BarbecueFormButton>
      </S.BarbecueForm>
    </S.Container>
  )
}

export default BarbecueModal
