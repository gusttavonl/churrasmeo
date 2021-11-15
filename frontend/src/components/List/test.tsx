import { render, screen } from '@/utils/tests/helpers'

import List, { ListMock } from '.'

describe('<List />', () => {
  const onRemove = jest.fn()
  it('should render a list default', () => {
    const { container } = render(
      <List
        countParticipants={10}
        date={new Date()}
        title="Titulo da modal"
        participants={ListMock.participants}
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
        participants={ListMock.participants}
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
