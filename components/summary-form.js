import {
  HStack,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Flex,
  Text,
  Divider,
  FormErrorMessage,
  FormHelperText,
  useAccordionItemState,
} from '@chakra-ui/react'

import dataCart from '../data/cart.json'

export default function SummaryForm() {
  return (
    <Stack p="5" spacing="8">
      <Stack>
        <Heading size="lg" color="teal">
          Personal Information
        </Heading>
        <FormControl id="name">
          <FormLabel>Your name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Your phone</FormLabel>
          <Input type="tel" placeholder="+63 123 455 789" />
        </FormControl>
      </Stack>

      <Stack>
        <Heading size="lg" color="teal">
          Delivery Information
        </Heading>
        <FormControl id="address">
          <FormLabel>Please type your full address</FormLabel>
          <Textarea placeholder="House/Condo number, Street address, Region" />
        </FormControl>
        <FormControl id="address">
          <FormLabel>Please select your appropriate region</FormLabel>
          <Select placeholder="Select region">
            <option value="muntinlupa">Muntinlupa</option>
            <option value="paranaque">Paranaque</option>
            <option value="makati">Makati</option>
            <option value="taguig">Taguig</option>
          </Select>
        </FormControl>
      </Stack>

      <Stack>
        <Heading size="lg" color="teal">
          Product Summary
        </Heading>
        {dataCart.map((item, index) => {
          return (
            <Flex key={item.name} justify="space-between">
              <Text>{item.name}</Text>
              <HStack>
                <Text>{item.amount}×</Text>
                <Text>₱{item.price}</Text>
              </HStack>
            </Flex>
          )
        })}
      </Stack>

      <Stack>
        <Heading size="lg" color="teal">
          Payment Summary
        </Heading>
        <Flex justify="space-between">
          <Text>Total Price</Text>
          <Text>₱450</Text>
        </Flex>
        <Flex justify="space-between">
          <Text>Delivery Fee</Text>
          <Text>₱30</Text>
        </Flex>
        <Divider opacity="1" borderColor="black" />
        <Flex justify="space-between">
          <Text>Total Payment</Text>
          <Text>₱480</Text>
        </Flex>
      </Stack>
    </Stack>
  )
}
