import { Container } from '@chakra-ui/react'

export default function Layout({ children }) {
  return (
    <Container p="0" bg="white">
      {children}
    </Container>
  )
}
