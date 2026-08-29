'use client'

import { getAccessToken } from '@/services/endpoints/auth/auth-tokens.service'
import { authService } from '@/services/endpoints/auth/auth.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useGetMe = () => {
  // const isAuth = getAccessToken()

  const { data, isPending, error, isError } = useQuery({
    queryKey: ['auth'],
    queryFn: async () => await authService.me(),
  })

  console.log(data)

  if (isError) {
    console.log(error)
    toast.error(error.message)
  }
  return { data, isPending }
}
