import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import NextApp from 'next/app'

import Meta from '@hackclub/meta'
import theme from '../lib/theme'
import theme2 from '../lib/theme2'
import { ThemeProvider } from 'theme-ui'
import * as Fathom from 'fathom-client'
import '../public/theme.css'
import '@hackclub/theme/fonts/reg-bold.css'

const App = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    // the hackclub.com code
    Fathom.load('OGIMJEFA', {
      includedDomains: ['summer.hackclub.com', 'hackclub.com']
    })
    const onRouteChangeComplete = () => Fathom.trackPageview()
    router.events.on('routeChangeComplete', onRouteChangeComplete)
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <ThemeProvider theme={router.pathname === '/' ? theme2 : theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
