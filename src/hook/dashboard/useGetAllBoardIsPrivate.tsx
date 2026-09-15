import { dashBoardService } from '@/services/endpoints/dashboard/dashboard.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetAllBoardIsPrivate = () => {
  const {data, isPending} = useQuery({
    queryKey: ['dashboard'],
    queryFn: async() => {
        return await dashBoardService.getAllIsPrivate()
    }
  })

  return {data, isPending}
}
