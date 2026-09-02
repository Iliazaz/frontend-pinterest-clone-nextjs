import { saveService } from '@/services/endpoints/save/save.serive'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

export type IPageParams = {
  limits: string
  cursor: {
    id: string
    createdAt: string
  }
}

export const useGetSavePins = () => {
  return useInfiniteQuery({
    queryKey: ['save'],
    queryFn: async ({ pageParam }) =>
      await saveService.getSavePin(pageParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => {
      return lastPage?.nextCursor ?? undefined
    },
  })
}
