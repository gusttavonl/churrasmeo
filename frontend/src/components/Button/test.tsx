import { render, screen } from '@/utils/tests/helpers'

import Button from '.'
import userEvent from '@testing-library/user-event'
import theme from '@/styles/theme'

const children = <p>Salvar</p>

describe('<Button />', () => {
  it('should render a button default', () => {
    const { container } = render(<Button>{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a button with save', () => {
    const { container } = render(<Button typeStyle="save">{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a button with enter', () => {
    const { container } = render(<Button typeStyle="enter">{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a button with delete', () => {
    const { container } = render(<Button typeStyle="delete">{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a button with delete color style', () => {
    render(<Button typeStyle="delete">{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    const wrapperButton = screen.getByTestId('ButtonWrapper')
    expect(wrapperButton).toHaveStyle({
      backgroundColor: `${theme.colors.baseColorRed}`
    })
  })

  it('should render a button is add color style', () => {
    render(<Button typeStyle="add">{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    const wrapperButton = screen.getByTestId('ButtonWrapper')
    expect(wrapperButton).toHaveStyle({
      backgroundColor: `${theme.colors.baseColorYellow}`
    })
  })

  it('should render a button is cancel color style', () => {
    render(<Button typeStyle="cancel">{children}</Button>)

    expect(screen.getByText('Salvar')).toBeInTheDocument()
    const wrapperButton = screen.getByTestId('ButtonWrapper')
    expect(wrapperButton).toHaveStyle({
      color: `${theme.colors.black}`
    })
  })

  it('should render a disabled save Button', () => {
    render(
      <Button typeStyle="save" disabled>
        {children}
      </Button>
    )

    const wrapperButton = screen.getByTestId('ButtonWrapper')
    expect(wrapperButton).toHaveStyleRule('cursor', 'not-allowed')
  })

  it('should on button click call onClick function', () => {
    const mockCallback = jest.fn((number: number) => number + 1)

    const onButtonClick = jest.fn(() => mockCallback(1))

    render(<Button onClick={onButtonClick}> {children}</Button>)

    const buttonToClick = screen.getByRole('button', {
      name: 'Salvar'
    })

    userEvent.click(buttonToClick)

    expect(onButtonClick).toHaveBeenCalledTimes(1)
    expect(onButtonClick).toReturnWith(2)
  })
})
