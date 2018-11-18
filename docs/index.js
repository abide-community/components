import React from 'react'
import { render } from 'react-dom'
import { Provider } from '@abide-community/components'
import Docs from './docs.mdx'

function App() {
  return (
    <Provider>
      <Docs />
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
