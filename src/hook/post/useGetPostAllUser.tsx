import { postService } from '@/services/endpoints/post/post.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

export const useGetPostAllUser = () => {
  const { data, isPending } = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      await postService.getPostAllIsUser()
    },
  })

  return { postAllUser: data, isPendingAllUser: isPending }
}
