import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";

export default function AdminAuth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [session, setSession] = useState(null);

  let handleLogin = async (data) => {
    let { user, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    const supabaseSession = supabase.auth.session();
    setSession(supabaseSession);
  });

  if (session) {
    return <div>you are logged in</div>;
  }

  return (
    <Stack as="form" p="10" spacing="5" onSubmit={handleSubmit(handleLogin)}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input type="email" {...register("email", { required: true })} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" {...register("password", { required: true })} />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="100%">
        Login
      </Button>
    </Stack>
  );
}
