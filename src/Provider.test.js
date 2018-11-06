import React from 'react'
import { render } from 'react-testing-library'
import Provider from './Provider'

test('rendering a Provider works', () => {
  const { container } = render(
    <Provider>
      <div />
    </Provider>
  )
  expect(container.firstChild).toMatchInlineSnapshot(`<div />`)
})

test('errors without child provided', () => {
  expect(() => render(<Provider />)).toThrowErrorMatchingInlineSnapshot(`
"Warning: Failed prop type: The prop \`children\` is marked as required in \`Provider\`, but its value is \`undefined\`.
    in Provider"
`)
})
