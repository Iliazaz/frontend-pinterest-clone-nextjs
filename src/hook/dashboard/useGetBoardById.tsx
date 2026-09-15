import { dashBoardService } from '@/services/endpoints/dashboard/dashboard.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetBoardById = (id: string) => {
  const { data, isPending } = useQuery({
    queryKey: ['dashboard'],
    queryFn: async () => {
      return await dashBoardService.getById(id)
    },
  })

  return { data, isPending }
}

