import { replatedService } from '@/services/endpoints/related/replated.service'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const LIMITS = 20

export const useGetReplatedPost = (postId: string) => {
  const { data, isPending } = useQuery({
    queryKey: ['replated', postId],
    queryFn: async () => {
      return await replatedService.getRelatedPosts(postId, LIMITS)
    },
    enabled: !!postId
})

  return { data, isPending }
}
