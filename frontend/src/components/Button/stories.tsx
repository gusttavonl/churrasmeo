import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { ButtonProps, ButtonMock } from '.'

export default {
  title: 'Components/Button',
  component: Button
} as Meta

export const Default: Story<ButtonProps> = (props) => <Button {...props} />

Default.args = ButtonMock
