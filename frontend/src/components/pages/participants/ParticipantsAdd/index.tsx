import ParticipantsModal from '../ParticipantsModal'
import Modal from '@/components/Modal'

export type ParticipantsProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  barbecueId: string
  loadBarbecue: () => void
  onClose: () => void
}

const ParticipantsAdd = ({
  isOpen,
  getValueOpen,
  barbecueId,
  loadBarbecue,
  onClose
}: ParticipantsProps) => {
  return (
    <Modal
      title="Adicionar participante"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <ParticipantsModal
        barbecueId={barbecueId}
        loadBarbecue={loadBarbecue}
        onClose={onClose}
      />
    </Modal>
  )
}

export default ParticipantsAdd
