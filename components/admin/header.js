import NextLink from 'next/link'
import { Stack, HStack, Text, Button } from '@chakra-ui/react'

import { supabase } from '../../lib/supabase'

export default function AdminHeader() {
  const handleLogout = async () => {
    try {
      let { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Stack spacing="0">
      <HStack as="header" bg="teal.400" p="5" justify="space-between">
        <div>
          <NextLink href="/admin">
            <a>
              <img src="/logos/logo-white.svg" alt="Bang Bakery" />
            </a>
          </NextLink>
        </div>
        <div>
          <Button colorScheme="red" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </HStack>
    </Stack>
  )
}
