import {
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function SummaryForm() {
  return (
    <Stack p="5">
      <Stack>
        <Heading>Personal Information</Heading>
        <FormControl id="name">
          <FormLabel>Your name</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Your phone</FormLabel>
          <Input type="tel" />
        </FormControl>
      </Stack>
      <Stack>
        <Heading>Delivery Information</Heading>
      </Stack>
      <Stack>
        <Heading>Product Summary</Heading>
      </Stack>
      <Stack>
        <Heading>Payment Summary</Heading>
      </Stack>
    </Stack>
  );
}
