import { Story, Meta } from '@storybook/react/types-6-0'
import Card, { CardProps, CardMock } from '.'

export default {
  title: 'Components/Card',
  component: Card
} as Meta

export const Default: Story<CardProps> = (props) => <Card {...props} />

Default.args = CardMock
