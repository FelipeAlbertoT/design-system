import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, withTheme } from 'emotion-theming'
import { theme as themeDefault } from '../../utils/Theme'
import ButtonStyled from './button.styles.js'

function Button({ children, onClick, theme }) {
  const adjustedTheme = (ancestorTheme) => ({ ...ancestorTheme, ...theme })
  return (
    <ThemeProvider theme={themeDefault}>
      <ThemeProvider theme={adjustedTheme}>
        <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
      </ThemeProvider>
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
  },
  theme: themeDefault
}
