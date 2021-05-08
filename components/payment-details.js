import { Heading, Stack, Text, Button, Image } from "@chakra-ui/react";

export default function PaymentDetails() {
  return (
    <Stack p="5" textAlign="center" spacing="10">
      <Stack>
        <Heading>Bang Bakery</Heading>
        <Text fontSize="3xl">+63 123 456 789</Text>
      </Stack>
      <Stack>
        <Heading>Amount Due</Heading>
        <Text fontSize="3xl">₱480</Text>
      </Stack>
      <Stack align="center" spacing="10">
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
  );
}
