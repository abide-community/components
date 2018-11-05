import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

export default function Donorbox({ name, height, ...props }) {
  const [script] = useState(document.createElement('script'))
  useEffect(() => {
    script.src = 'https://donorbox.org/widget.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)
    return () => document.body.removeChild(script)
  })
  return (
    <iframe
      src={`https://donorbox.org/embed/${name}`}
      height={height}
      name="donorbox"
      frameBorder="0"
      scrolling="no"
      {...props}
    />
  )
}

Donorbox.propTypes = {
  /** The name of the Donorbox campaign. */
  name: PropTypes.string.isRequired,
  /** The height (in pixels) of the Donorbox widget. */
  height: PropTypes.number,
}

Donorbox.defaultProps = {
  height: 685,
}
