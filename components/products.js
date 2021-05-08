import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'

import dataProducts from '../data/products.json'

export default function Products() {
  return (
    <SimpleGrid columns={2} spacing={10} p={5}>
      {dataProducts.map((product, index) => {
        return (
          <Stack key={product.name}>
            <img src={product.image} alt={product.name} />
            <Heading as="h2" size="md" fontWeight="regular">
              {product.name}
            </Heading>
            <Heading as="h3" size="md" fontWeight="regular">
              ₱{product.price}
            </Heading>
          </Stack>
        )
      })}
    </SimpleGrid>
  )
}
