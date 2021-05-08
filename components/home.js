import Link from 'next/link'
import {
  Heading,
  Stack,
  VStack,
  Flex,
  Button,
  Image,
  Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Tagline from '../components/tagline'

export default function Home() {
  return (
    <main>
      <Stack
        id="hero"
        sx={{
          background:
            'linear-gradient(180deg, rgba(222, 50, 153, 0.5) 0%, rgba(255, 255, 255, 0) 100%), url("/backgrounds/hero-home.jpeg")',
          'background-repeat': 'no-repeat',
        }}
        bgSize="cover"
        p="10"
      >
        <VStack spacing="10">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.25 }}
          >
            <img src="/logos/logo.png" alt="Bang Bakery" />
          </motion.div>
          <Tagline>Naturally handmade with love.</Tagline>
          <Link href="/order">
            <Button
              cursor="pointer"
              as="a"
              colorScheme="pink"
              size="lg"
              p="7"
              fontSize="3xl"
              borderWidth="5px"
              borderColor="pink.600"
              borderRadius="xl"
            >
              Order Breads
            </Button>
          </Link>
        </VStack>
      </Stack>

      <Stack bg="#FFFF01" pb="10">
        <Flex
          sx={{
            background:
              'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFF01 100%), url("/images/pattern.png")',
          }}
          bgRepeat="repeat"
          height="400px"
          align="center"
          justify="center"
        >
          <Image
            src="/images/sourdough.webp"
            alt="Sourdough Bread"
            boxSize="300px"
            objectFit="contain"
          />
        </Flex>
        <Stack
          // marginTop="-300px"
          px="5"
          justify="center"
          align="center"
          spacing="10"
        >
          <Stack spacing="5">
            <Tagline align="left">Sourdough bread made from scratch.</Tagline>
            <Text color="yellow.800" fontSize="xl">
              Our signature gourmet sourdough bread is very delicious. In every
              bite, you can taste the pure butter and hints of brown sugar.
              Crispy on the outside, soft and chewy on the inside, they’re a
              simple indulgence you won’t forget! And, we still makes them the
              same way today as when it all started over 5 years ago in our home
              kitchen.
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </main>
  )
}
