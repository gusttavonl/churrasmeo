import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import AppProvider from '@/hooks'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Churrasmeo</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Churrascos em qualquer dia!" />
      </Head>
      <GlobalStyles />
      <AppProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </AppProvider>
    </ThemeProvider>
  )
}

export default App
