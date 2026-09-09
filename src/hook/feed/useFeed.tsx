'use client'

import { feedService } from '@/services/endpoints/feed/feed.service'
import { IFeedLiteResponse } from '@/shared/types/feed.types'
import { ICursor } from '@/shared/types/save.interface'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'

const LIMIT = 20

export const useFeedLite = () => {
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<
      IFeedLiteResponse,
      Error,
      InfiniteData<IFeedLiteResponse>,
      string[],
      ICursor | null
    >({
      queryKey: ['feed'],

      queryFn: async ({ pageParam }) => {
        return await feedService.getRecommendedFeedIsNotAuth(LIMIT, pageParam)
      },

      initialPageParam: null,

      getNextPageParam: (lastPage) => {
        return lastPage?.data?.nextCursor ?? undefined  
      },
    })

  return {
    data,
    isPending,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
