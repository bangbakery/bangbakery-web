import NextLink from 'next/link'
import { Stack, HStack, Text } from '@chakra-ui/react'

export default function Header({ storeStatus = 'close' }) {
  return (
    <Stack spacing="0">
      <HStack as="header" bg="teal.400" p="5" justify="space-between">
        <div>
          <img src="/icons/menu.svg" alt="menu" />
        </div>
        <div>
          <NextLink href="/">
            <a>
              <img src="/logos/logo-white.svg" alt="Bang Bakery" />
            </a>
          </NextLink>
        </div>
        <div>
          <NextLink href="/order">
            <a>
              <img src="/icons/cart.svg" alt="cart" />
            </a>
          </NextLink>
        </div>
      </HStack>

      <Stack
        bg="pink.500"
        color="white"
        fontWeight="bold"
        fontSize="xl"
        p="1"
        px="5"
        spacing="0"
      >
        {storeStatus === 'open' ? (
          <Text>We are open.</Text>
        ) : (
          <Text>We are closed. Open Monday-Friday 09:00-21:00</Text>
        )}
      </Stack>
    </Stack>
  )
}
