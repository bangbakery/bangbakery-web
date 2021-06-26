import { Flex, Text, Link, Image } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Flex
      as="footer"
      direction="column"
      align="center"
      bg="blue.500"
      color="white"
      px="5"
      py="10"
      spacing="2"
    >
      <Text fontSize="4xl" fontFamily="Passion One">
        Stay in touch
      </Text>
      <Link isExternal href="https://instagram.com/thebangbakery">
        <Image boxSize="30px" src="/images/instagram.svg" alt="Instagram" />
      </Link>
      <Text mt="5" fontWeight="bold">
        © 2021 BangBakery
      </Text>
    </Flex>
  )
}
