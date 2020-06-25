import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, withTheme } from 'emotion-theming'

import ButtonStyled from './button.styles.js'

function Button({ children, onClick, theme }) {
  return (
    <ThemeProvider theme={theme}>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </ThemeProvider>
  )
}

export default withTheme(Button)

Button.propTypes = {
  /** Button label */
  children: PropTypes.node.isRequired,
  /** Disble button */
  disabled: PropTypes.bool,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func
}

Button.defaultProps = {
  disabled: false,
  margin: '0',
  onClick: (event) => {
    console.log('Click', event.target)
  }
}
