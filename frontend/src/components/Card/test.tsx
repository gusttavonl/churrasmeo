import { render, screen } from '@/utils/tests/helpers'

import Card from '.'
import userEvent from '@testing-library/user-event'

describe('<Card />', () => {
  const onClick = jest.fn()
  it('should render a card default', () => {
    const { container } = render(
      <Card
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
        onClick={onClick}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a card with color style', () => {
    render(
      <Card
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
        onClick={onClick}
      />
    )

    expect(screen.getByText('Titulo da modal')).toBeInTheDocument()
    const wrapperCard = screen.getByTestId('WrapperCard')
    expect(wrapperCard).toHaveStyle({
      width: 'fit-content'
    })
  })

  it('should on card click call onClick function', () => {
    const mockCallback = jest.fn((number: number) => number + 1)

    const onCardClick = jest.fn(() => mockCallback(1))

    render(
      <Card
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
        onClick={onCardClick}
      />
    )

    const cardToClick = screen.getByText('Titulo da modal')

    userEvent.click(cardToClick)

    expect(onCardClick).toHaveBeenCalledTimes(1)
    expect(onCardClick).toReturnWith(2)
  })
})
