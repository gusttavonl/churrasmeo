import userEvent from '@testing-library/user-event'
import { render, screen } from '@/utils/tests/helpers'

import Modal from '.'

const children = (
  <div>
    <h1>Churrasmeo</h1>
  </div>
)

describe('<Modal />', () => {
  const getValueOpen = jest.fn()
  it('should render Modal', () => {
    const { container } = render(
      <Modal title="teste" isOpen={true} getValueOpen={getValueOpen}>
        {children}
      </Modal>
    )

    expect(screen.getByText('Churrasmeo')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render all elements with default properties ', () => {
    render(
      <Modal title="teste" isOpen={true} getValueOpen={getValueOpen}>
        {children}
      </Modal>
    )
    const motion = screen.getByTestId('motion')
    const wrapperModal = document.querySelector('#WrapperModal')!

    expect(motion).toHaveStyle({ 'max-width': '80%' })
    expect(wrapperModal).toHaveStyle({ width: '100%', height: '100vh' })
  })

  it('should trigger function onClose when clicking on modal', () => {
    render(
      <Modal title="teste" isOpen={true} getValueOpen={getValueOpen}>
        {children}
      </Modal>
    )

    const wrapperModal = document.querySelector('#WrapperModal')!
    userEvent.click(wrapperModal)
    expect(wrapperModal).not.toBeVisible()
  })

  it('should trigger function onClick to close modal', () => {
    render(
      <Modal title="teste" isOpen={true} getValueOpen={getValueOpen}>
        {children}
      </Modal>
    )

    const onClick = screen.getByTestId('CloseIcon')
    const wrapperModal = document.querySelector('#WrapperModal')!
    userEvent.click(onClick)
    expect(wrapperModal).not.toBeVisible()
  })
})
