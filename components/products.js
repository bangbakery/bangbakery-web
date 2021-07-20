import { useState, useEffect } from "react";
import {
  Stack,
  Heading,
  SimpleGrid,
  IconButton,
  HStack,
  Text,
} from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";

import { supabase } from "../lib/supabase";
import { useSWR, fetcher } from "../lib/swr";

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading products...</div>;

  return (
    <SimpleGrid columns={2} spacing={10} p={5} pb="100px">
      {data.map((product, index) => {
        return <ProductCard product={product} />;
      })}
    </SimpleGrid>
  );
}

const ProductCard = ({ product }) => {
  const [amount, setAmount] = useState(0);

  const decreaseAmount = () => {
    if (amount >= 1) {
      setAmount(amount - 1);
    }
  };

  const increaseAmount = () => {
    if (amount < 10) {
      setAmount(amount + 1);
    }
  };
  return (
    <Stack key={product.name}>
      <img src={product.image} alt={product.name} />
      <Heading as="h2" size="md" fontWeight="regular">
        {product.name}
      </Heading>
      <Heading as="h3" size="md" fontWeight="regular">
        ₱{product.price}
      </Heading>
      <HStack>
        <IconButton
          aria-label="decrease amount"
          isRound
          size="sm"
          colorScheme="red"
          variant="outline"
          icon={<MinusIcon />}
          onClick={decreaseAmount}
        />
        <span>{amount}</span>
        <IconButton
          aria-label="increase amount"
          isRound
          size="sm"
          colorScheme="green"
          variant="outline"
          icon={<AddIcon />}
          onClick={increaseAmount}
        />
      </HStack>
      <Text fontSize="md">{product.quantity} breads left</Text>
    </Stack>
  );
};
