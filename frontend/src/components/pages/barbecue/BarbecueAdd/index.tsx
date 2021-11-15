import BarbecueModal from '../BarbecueModal'
import Modal from '@/components/Modal'

export type BarbecueProps = {
  isOpen: boolean
  getValueOpen: (value: boolean) => void
  loadBarbecues: () => void
  onClose: () => void
}

const BarbecueAdd = ({
  isOpen,
  getValueOpen,
  loadBarbecues,
  onClose
}: BarbecueProps) => {
  return (
    <Modal
      title="Adicionar churras"
      isOpen={isOpen}
      getValueOpen={getValueOpen}
    >
      <BarbecueModal loadBarbecues={loadBarbecues} onClose={onClose} />
    </Modal>
  )
}

export default BarbecueAdd
