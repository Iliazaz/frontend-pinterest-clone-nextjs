import { dashBoardService } from '@/services/endpoints/dashboard/dashboard.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetDashBoardIsUsers = () => {
  const { data, isPending } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      return await dashBoardService.getAllIsUsers()
    },
  })

  return { data, isPending }
}
