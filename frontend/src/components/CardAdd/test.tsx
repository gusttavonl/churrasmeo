import { render, screen } from '@/utils/tests/helpers'

import CardAdd from '.'
import userEvent from '@testing-library/user-event'

describe('<CardAdd />', () => {
  const onClick = jest.fn()
  it('should render a card default', () => {
    const { container } = render(<CardAdd onClick={onClick} />)

    expect(screen.getByText('Adicionar Churras')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a card with color style', () => {
    render(<CardAdd onClick={onClick} />)

    expect(screen.getByText('Adicionar Churras')).toBeInTheDocument()
    const wrapperCardAdd = screen.getByTestId('WrapperCardAdd')
    expect(wrapperCardAdd).toHaveStyle({
      width: 'fit-content'
    })
  })

  it('should on card click call onClick function', () => {
    const mockCallback = jest.fn((number: number) => number + 1)

    const onCardAddClick = jest.fn(() => mockCallback(1))

    render(<CardAdd onClick={onCardAddClick} />)

    const cardToClick = screen.getByText('Adicionar Churras')

    userEvent.click(cardToClick)

    expect(onCardAddClick).toHaveBeenCalledTimes(1)
    expect(onCardAddClick).toReturnWith(2)
  })
})
