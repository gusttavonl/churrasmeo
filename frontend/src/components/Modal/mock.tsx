import { ModalProps } from '.'
import List from '../List'

export const ModalMock: ModalProps = {
  isOpen: false,
  title: 'Participantes do churras',
  getValueOpen: () => undefined,
  children: (
    <List
      date={new Date()}
      title="Churras meo"
      countParticipants={10}
      onRemove={() => undefined}
      value={250}
      participants={[
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1000,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        },
        {
          id: 'any_id',
          barbecue: { id: 'any_id' },
          name: 'any_name',
          value: 1,
          value_suggestions_with_drink: 1,
          value_suggestions_with_out_drink: 1
        }
      ]}
    />
  )
}
