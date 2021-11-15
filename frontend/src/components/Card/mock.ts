import { CardProps } from '.'

export const CardMock: CardProps = {
  date: new Date(),
  title: 'Churras meo',
  countParticipants: 10,
  participants: [
    {
      id: 'any_id',
      barbecue: { id: 'any_id' },
      name: 'any_name',
      value: 1,
      value_suggestions_with_drink: 1,
      value_suggestions_with_out_drink: 1
    },
    {
      id: 'any_id2',
      barbecue: { id: 'any_id' },
      name: 'any_name',
      value: 1,
      value_suggestions_with_drink: 1,
      value_suggestions_with_out_drink: 1
    }
  ]
}
