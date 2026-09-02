'use client'

import { userService } from '@/services/endpoints/user/user.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
  const { data, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: async () => await userService.getProfile(),
  })

  return { data, isPending }
}
