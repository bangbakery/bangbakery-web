import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'
import { ChakraProvider } from '@chakra-ui/react'

import SEO from '../next-seo.config'

import { SupabaseContextProvider } from 'use-supabase'
import { supabase } from '../lib/supabase'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <DefaultSeo {...SEO} />

      <SupabaseContextProvider client={supabase}>
        <Component {...pageProps} />
      </SupabaseContextProvider>
    </ChakraProvider>
  )
}

export default MyApp
