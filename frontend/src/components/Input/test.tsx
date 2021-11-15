import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen, waitFor } from '@/utils/tests/helpers'
import theme from '@/styles/theme'
import Input from '.'

describe('<Input />', () => {
  it('should render input with placeholder', () => {
    render(
      <Input type="text" label="Text Field" placeholder="Form Field Text" />
    )
    expect(screen.getByPlaceholderText('Form Field Text')).toHaveStyle({
      width: '282px'
    })
  })

  it('should render input without Label', () => {
    render(<Input type="text" placeholder="Placeholder" />)
    expect(screen.queryByText('Label Name')).not.toBeInTheDocument()
  })

  it('should render input with Label', () => {
    render(<Input type="text" label="Label Name" placeholder="Placeholder" />)
    expect(screen.queryByText('Label Name')).toBeInTheDocument()
  })

  it('should render input with error', () => {
    render(
      <Input
        type="text"
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
      />
    )
    expect(screen.queryByText('Error message')).toHaveStyle({
      color: `${theme.colors.baseColorRed}`
    })
  })

  it('should does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <Input
        onInputChange={onInputChange}
        type="text"
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
        disabled
      />
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('should changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(
      <Input
        onInputChange={onInputChange}
        type="text"
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
      />
    )
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('should render default Input with focus', () => {
    render(
      <Input
        type="text"
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
      />
    )
    const input = screen.getByPlaceholderText('Placeholder')

    userEvent.type(input, 'value')
    expect(input).toHaveFocus()
  })

  it('should render default Text field without focus', () => {
    render(
      <Input
        type="text"
        label="Label Name"
        error="Error message"
        placeholder="Placeholder"
        value="email"
      />
    )
    const input = screen.getByPlaceholderText('Placeholder')

    fireEvent.blur(input)
    expect(input).toBeInTheDocument()
  })
})
