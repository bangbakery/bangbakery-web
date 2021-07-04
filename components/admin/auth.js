import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Stack,
  Button,
  Box,
  Text,
  Heading,
} from '@chakra-ui/react'
import { useSupabase, useUser } from 'use-supabase'

import AdminStoreStatus from './store-status'

export default function AdminAuth() {
  const supabase = useSupabase()
  const user = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  let handleLogin = async (data) => {
    let { user, error } = await supabase.auth.signIn({
      email: data.email,
      password: data.password,
    })
  }

  if (user) {
    return (
      <Stack p="5" spacing="5">
        <Text>
          You are logged in as <br />
          <b> {user.email}</b>
        </Text>
        <AdminStoreStatus />
      </Stack>
    )
  }

  return (
    <Stack as="form" p="10" spacing="5" onSubmit={handleSubmit(handleLogin)}>
      <FormControl id="email">
        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          defaultValue=""
          {...register('email', { required: true })}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          defaultValue=""
          {...register('password', { required: true })}
        />
      </FormControl>
      <Button type="submit" colorScheme="teal" width="100%">
        Login
      </Button>
    </Stack>
  )
}
