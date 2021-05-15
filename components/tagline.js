import { Heading } from '@chakra-ui/react'

export default function Tagline({ align = 'center', children }) {
  return (
    <Heading
      textAlign={align}
      as="h2"
      size="3xl"
      color="white"
      maxW="420px"
      fontFamily="Passion One"
      sx={{
        WebkitTextStrokeWidth: '0.5px',
        WebkitTextStrokeColor: '#3a0000',
      }}
    >
      {children}
    </Heading>
  )
}
