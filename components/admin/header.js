import NextLink from "next/link";
import { Stack, HStack, Text, Button } from "@chakra-ui/react";

export default function AdminHeader({ storeStatus = "close" }) {
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
          <Button colorScheme="red" size="sm">
            Logout
          </Button>
        </div>
      </HStack>
    </Stack>
  );
}
