import { postService } from '@/services/endpoints/post/post.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetByIdPost = (id: string) => {
  const { data, isPending } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      await postService.getByIdPost(id)
    },
    enabled: !!id,
  })

  return { data, isPending }
}
