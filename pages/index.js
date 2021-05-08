import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Flex, Stack } from '@chakra-ui/react'

import Header from '../components/header'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>BangBakery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div id="hero" className="hero-home">
          <img src="/logos/logo.png" alt="Bang Bakery" />
          <Heading as="h2" className="tagline">
            Naturally handmade with love.
          </Heading>
          <Link href="/order">
            <a className="order button">Order Breads</a>
          </Link>
        </div>
      </main>
    </Container>
  )
}
