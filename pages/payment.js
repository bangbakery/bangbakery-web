import Head from 'next/head'
import Link from 'next/link'
import { Container, Heading, Flex, Button } from '@chakra-ui/react'

import Header from '../components/header'
import PaymentDetails from '../components/payment-details'

export default function OrderPage() {
  return (
    <Container p="0">
      <Head>
        <title>Payment with GCash</title>
      </Head>

      <Header />

      <Flex px="5" py="2" bg="pink.500" color="white">
        <Heading as="h1" size="lg">
          Payment with GCash
        </Heading>
      </Flex>

      <PaymentDetails />
    </Container>
  )
}
