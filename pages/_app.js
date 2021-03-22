import React from 'react'
import { useRouter } from 'next/router'

import theme from '../lib/theme'
import theme2 from '../lib/theme2'
import { ThemeProvider } from 'theme-ui'
import '../public/theme.css'
import '@hackclub/theme/fonts/reg-bold.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <ThemeProvider theme={router.pathname === '/' ? theme2 : theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
