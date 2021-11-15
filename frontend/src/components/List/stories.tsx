import { Story, Meta } from '@storybook/react/types-6-0'
import List, { ListProps, ListMock } from '.'

export default {
  title: 'Components/List',
  component: List
} as Meta

export const Default: Story<ListProps> = (props) => <List {...props} />

Default.args = ListMock
