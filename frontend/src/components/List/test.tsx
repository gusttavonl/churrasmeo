import { render, screen } from '@/utils/tests/helpers'

import List from '.'

describe('<List />', () => {
  const onRemove = jest.fn()
  it('should render a list default', () => {
    const { container } = render(
      <List
        countParticipants={10}
        date={new Date()}
        title="Titulo da modal"
        participants={[
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
        ]}
        onRemove={onRemove}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a list with color style', () => {
    render(
      <List
        countParticipants={10}
        date={new Date()}
        title="Titulo da modal"
        participants={[
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
        ]}
        onRemove={onRemove}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    const wrapperList = screen.getByTestId('WrapperList')
    expect(wrapperList).toHaveStyle({
      width: 'fit-content'
    })
  })
})
