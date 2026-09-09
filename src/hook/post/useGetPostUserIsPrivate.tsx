import { postService } from '@/services/endpoints/post/post.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetPostUserIsPrivate = () => {
  const { data, isPending } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      await postService.getPostIsUserPrivate()
    },
  })

  return { data, isPending }
}
