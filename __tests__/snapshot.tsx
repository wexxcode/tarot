import { act, render } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home component', () => {
  it('renders homepage unchanged', () => {
    let container
    act(() => {
      ({ container } = render(<Home />))
    })
    expect(container).toMatchSnapshot()
  })
})