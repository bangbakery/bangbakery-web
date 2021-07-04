import { Button, Stack, Box, Heading, ButtonGroup } from '@chakra-ui/react'
import Link from 'next/link'

export default function AdminManageData() {
  return (
    <Stack>
      <Heading>Manage Data</Heading>
      <ButtonGroup colorScheme="teal" size="xl">
        <Link href="/products">
          <Button as="a" padding={7}>
            Products
          </Button>
        </Link>
        <Link href="/orders">
          <Button as="a" padding={7}>
            Orders
          </Button>
        </Link>
      </ButtonGroup>
    </Stack>
  )
}
