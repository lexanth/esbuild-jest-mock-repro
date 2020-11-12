jest.mock('./B', () => ({
  B: () => <div>MOCK B</div>,
}))

import { render } from '@testing-library/react'
import React from 'react'
import { A } from './A'

describe('A', () => {
  it('should render', () => {
    const { container } = render(<A />)
    // This snapshot should have "MOCK B" rather than "THIS IS THE REAL B"
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          data-testid="A"
        >
          <div
            data-testid="B"
          >
            THIS IS THE REAL B
          </div>
        </div>
      </div>
    `)
  })
})
