import 'styles/styles.global.scss'
import React from 'react'
import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;