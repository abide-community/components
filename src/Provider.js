import React from 'react'
import defaultTheme from './theme'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

export default function Provider({ theme = {}, children }) {
  return (
    <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeProvider>
  )
}

Provider.propTypes = {
  /** An optional theme object to override defaults in the Abide theme. */
  theme: PropTypes.object,
  /** The children components to inherit the theme configuration. */
  children: PropTypes.node.isRequired,
}
