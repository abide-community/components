import React from 'react'
import { render } from 'react-testing-library'
import Donorbox from './Donorbox'

test('rendering a Donorbox works', async () => {
  const { container } = render(<Donorbox name="become" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
<iframe
  frameborder="0"
  height="685"
  name="donorbox"
  scrolling="no"
  src="https://donorbox.org/embed/become"
/>
`)
})
