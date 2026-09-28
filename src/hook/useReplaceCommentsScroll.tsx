import React from 'react'
import { useGetReplaceComments } from './comments/useGetReplaceComments'

export const useReplaceCommentsScroll = (id: string) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetReplaceComments(id)
  console.log(data)

  const replies = data?.pages.flatMap((page) => page.data.replies) ?? []
  console.log(replies)

  return { replies }
}
