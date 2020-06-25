import React from 'react'

import { Button, ThemeProvider } from 'my-component-lib'

const theme = {
  color: 'blue',
  backgroundColor: 'magenta',
  primaryColor: 'cyan'
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button onClick={() => alert('clicou')}>Teste</Button>
      </div>
      </ThemeProvider>
  )
}

export default App
