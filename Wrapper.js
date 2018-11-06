import React from 'react'
import { Provider } from './src'

export default function Wrapper({ children }) {
  return <Provider>{children}</Provider>
}
