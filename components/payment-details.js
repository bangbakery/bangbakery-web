import { Heading, Stack, Text, Button, Image } from '@chakra-ui/react'

export default function PaymentDetails() {
  return (
    <Stack p="5" textAlign="center" spacing="5" minH="100vh">
      <Stack>
        <Heading size="md">Bang Bakery</Heading>
        <Text fontSize="3xl">+63 123 456 789</Text>
      </Stack>

      <Stack>
        <Heading size="md">Amount Due</Heading>
        <Text fontSize="3xl">₱480</Text>
      </Stack>

      <Stack align="center" spacing="5">
        <Button colorScheme="blue" variant="outline" size="lg" fontSize="2xl">
          Pay with GCash
        </Button>
        <Image
          objectFit="contain"
          boxSize="300px"
          src="/images/qrcode.png"
          alt="GCash"
        />
      </Stack>
    </Stack>
  )
}
