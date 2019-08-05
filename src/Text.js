import { Text as RebassText } from 'rebass'
import system from '@rebass/components'

const Text = system({
  extend: RebassText,
  lineHeight: 1.625,
  mt: 3,
  mb: 4,
  css: {
    'ul &': {
      marginTop: 0,
      marginBottom: 0,
    },
  },
})

Text.propTypes = RebassText.propTypes

export default Text
