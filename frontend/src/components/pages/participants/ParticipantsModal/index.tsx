import Button from '@/components/Button'
import Input from '@/components/Input'
import api from '@/services/api'
import { ParticipantsAddParams } from '@/services/models/participants'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as S from './styles'

type ParticipantsForm = {
  name: string
  value: number
  value_suggestions_with_drink: number
  value_suggestions_with_out_drink: number
}

type ParticipantsModalProps = {
  barbecueId: string
  loadBarbecue: () => void
  onClose: () => void
}

const ParticipantsModal = ({
  barbecueId,
  loadBarbecue,
  onClose
}: ParticipantsModalProps) => {
  const { handleSubmit } = useForm<ParticipantsForm>()
  const [name, setName] = useState('')
  const [value, setValue] = useState(0)
  const [valueSuggestionsWithDrink, setValueSuggestionsWithDrink] = useState(0)
  const [valueSuggestionsWithoutDrink, setValueSuggestionsWithouDrink] =
    useState(0)

  const convertValueToNumber = Number(value)
  const convertValueSuggestionsWithDrinkToNumber = Number(
    valueSuggestionsWithDrink
  )
  const convertValueSuggestionsWithoutDrinkToNumber = Number(
    valueSuggestionsWithoutDrink
  )
  const handleSubmitParticipants = useCallback(async () => {
    try {
      const participants: ParticipantsAddParams = {
        barbecue: { id: barbecueId },
        value: convertValueToNumber,
        name,
        value_suggestion_with_drink: convertValueSuggestionsWithDrinkToNumber,
        value_suggestion_with_out_drink:
          convertValueSuggestionsWithoutDrinkToNumber
      }

      await api.post('/participants', participants)
      loadBarbecue()
      onClose()

      toast.success('Participante salvo com Sucesso')
    } catch (error) {
      toast.error('Erro ao salvar Participante')
    }
  }, [
    barbecueId,
    convertValueSuggestionsWithDrinkToNumber,
    convertValueSuggestionsWithoutDrinkToNumber,
    convertValueToNumber,
    loadBarbecue,
    name,
    onClose
  ])

  return (
    <S.Container>
      <S.ParticipantsForm onSubmit={handleSubmit(handleSubmitParticipants)}>
        <S.ParticipantsFormInputies>
          <Input
            label="Nome"
            type="text"
            onInputChange={setName}
            placeholder="Digite o nome do participante"
            required
          />

          <Input
            label="Valor de participação"
            type="number"
            onInputChange={setValue}
            placeholder="Digite o valor da participação"
            required
          />

          <Input
            label="Valor de sugestão com bebida"
            type="number"
            onInputChange={setValueSuggestionsWithDrink}
            placeholder="Digite o valor com bebida"
            required
          />

          <Input
            label="Valor de sugestão sem bebida"
            type="number"
            onInputChange={setValueSuggestionsWithouDrink}
            placeholder="Digite o valor sem bebida"
            required
          />
        </S.ParticipantsFormInputies>

        <S.ParticipantsFormButton>
          <Button typeStyle="save" type="submit">
            Salvar
          </Button>
        </S.ParticipantsFormButton>
      </S.ParticipantsForm>
    </S.Container>
  )
}

export default ParticipantsModal
