import { Story, Meta } from '@storybook/react/types-6-0'
import Modal, { ModalProps, ModalMock } from '.'

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta

export const Default: Story<ModalProps> = (props) => <Modal {...props} />

Default.args = ModalMock
