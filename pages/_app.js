import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'

import SEO from '../next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
