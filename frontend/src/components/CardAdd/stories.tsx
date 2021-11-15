import { Story, Meta } from '@storybook/react/types-6-0'
import CardAdd, { CardAddProps, CardAddMock } from '.'

export default {
  title: 'Components/CardAdd',
  component: CardAdd
} as Meta

export const Default: Story<CardAddProps> = (props) => <CardAdd {...props} />

Default.args = CardAddMock
