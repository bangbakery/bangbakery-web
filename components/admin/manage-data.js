import { Button, Stack, Box, Heading, ButtonGroup } from '@chakra-ui/react'

export default function AdminManageData() {
  return (
    <Stack>
      <Heading>Manage Data</Heading>
      <ButtonGroup colorScheme="teal" size="xl">
        <Button padding={7}>Products</Button>
        <Button padding={7}>Orders</Button>
      </ButtonGroup>
    </Stack>
  )
}
