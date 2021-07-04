import { Stack, Heading, Button } from '@chakra-ui/react'

export default function AdminStoreStatus() {
  const storeStatus = 'open'

  return (
    <Stack spacing={3} align="flex-start">
      <Heading as="h2" size="xl">
        Store Status
      </Heading>

      {storeStatus === 'open' ? (
        <Heading as="h3" size="md" color="green">
          Store is Open
        </Heading>
      ) : (
        <Heading as="h3" size="md" color="red">
          Store is Closed
        </Heading>
      )}

      {storeStatus === 'open' ? (
        <Button colorScheme="red">Change to Close</Button>
      ) : (
        <Button colorScheme="green">Change to Open</Button>
      )}
    </Stack>
  )
}
