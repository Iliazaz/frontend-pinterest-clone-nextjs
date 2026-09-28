import { postService } from '@/services/endpoints/post/post.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetByIdPost = (id: string) => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ['post', id],
    queryFn: async () => {
      return await postService.getByIdPost(id)
    },
    enabled: !!id,
  })

  return { data, isPending, refetch }
}
