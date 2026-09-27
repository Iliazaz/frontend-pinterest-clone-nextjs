import { commentService } from '@/services/endpoints/comments/comments.service'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'

const LIMIT = 20

export const useGetReplaceComments = (parentCommentId: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ['comments'],
      initialPageParam: 0,
      queryFn: async ({ pageParam }) => {
        return await commentService.getCommentsReplies(
          parentCommentId,
          LIMIT,
          pageParam,
        )
      },
      getNextPageParam: (lastPage) => {
        if (!lastPage.data.hasNextPage) {
          return undefined
        }

        return lastPage.data.offset + lastPage.data.limit
      },
    })

  return { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading }
}
