import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Flex, Button } from '@chakra-ui/react'

import Layout from '../components/layout'
import Header from '../components/header'
import Products from '../components/products'

export default function OrderPage() {
  return (
    <Layout>
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

      <Flex
        width="100%"
        p="2"
        bg="purple.800"
        position="fixed"
        bottom="-1px"
        maxW="60ch"
      >
        <Link href="/summary" id="order-button">
          <Button
            as="a"
            cursor="pointer"
            width="100%"
            size="lg"
            rounded="full"
            bg="#FFFF01"
            _hover={{ bg: 'yellow.300' }}
          >
            <Flex justify="space-between" width="100%">
              <span>Order 0 item</span>
              <span>₱ 0</span>
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Layout>
  )
}
