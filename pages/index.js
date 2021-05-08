import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Flex, Stack } from '@chakra-ui/react'

import Header from '../components/header'
import Home from '../components/home'
import Footer from '../components/footer'

export default function HomePage() {
  return (
    <Container p="0">
      <Head>
        <title>BangBakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
      <Footer />
    </Container>
  )
}
