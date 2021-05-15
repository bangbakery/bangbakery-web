import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Flex, Button } from '@chakra-ui/react'

import Layout from '../components/layout'
import Header from '../components/header'
import SummaryForm from '../components/summary-form'

export default function SummaryPage() {
  return (
    <Layout>
      <Head>
        <title>Order Summary - BangBakery</title>
      </Head>
      <Header />
      <SummaryForm />
      <Flex justify="center" px="5" py="2" bg="pink.500" color="white">
        <Heading as="h1" size="sm">
          Please fill and double check your details and summary before placing
          the order
        </Heading>
      </Flex>
      <Flex width="100%" p="2" bg="purple.800">
        <Link href="/payment">
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
              <span>Place your order</span>
              <span>₱480</span>
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Layout>
  )
}
