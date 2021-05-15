import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Flex, Button } from '@chakra-ui/react'

import Header from '../components/header'
import Products from '../components/products'

export default function OrderPage() {
  return (
    <Container p="0">
      <Head>
        <title>Order breads from BangBakery</title>
      </Head>

      <Header />

      <Flex px={5} py={2} bg="pink.500" color="white">
        <Heading as="h1" size="md">
          Let's order some bread
        </Heading>
      </Flex>

      <Products />

      <Flex width="100%" p="2" bg="purple.800" position="fixed" bottom="0">
        <Link href="/summary">
          <Button as="a" width="100%" bg="#FFFF01" size="lg" rounded="full">
            <Flex justify="space-between" width="100%">
              <span>Order 2 items</span>
              <span>₱450</span>
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Container>
  )
}
