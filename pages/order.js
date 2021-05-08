import Head from 'next/head'
import { Heading, Flex, Stack } from '@chakra-ui/react'

import Header from '../components/header'
import Products from '../components/products'

export default function OrderPage() {
  return (
    <div>
      <Head>
        <title>Order breads from BangBakery</title>
      </Head>

      <Header />

      <Flex justify="center" p={2} bg="pink.500" color="white">
        <Heading as="h1" size="xl">
          Let's order some bread
        </Heading>
      </Flex>

      <Products />
    </div>
  )
}
