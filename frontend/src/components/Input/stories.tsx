import { Story, Meta } from '@storybook/react/types-6-0'
import Input, { InputProps, InputMock } from '.'

export default {
  title: 'Components/Input',
  component: Input
} as Meta

export const Default: Story<InputProps> = (props) => (
  <Input {...props} {...{ error: '' }} />
)

Default.args = InputMock

export const WithError: Story<InputProps> = (props) => <Input {...props} />

WithError.args = InputMock
