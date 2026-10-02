import {
  ICommentsGetAll,
  ICreateCommentsResponse,
} from '@/shared/types/comments.interface'
import { ICursor } from '@/shared/types/save.interface'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { commentService } from '../../services/endpoints/comments/comments.service'

const LIMIT = 20

export const useGetAllComments = (postId: string) => {
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<
      ICommentsGetAll,
      Error,
      InfiniteData<ICommentsGetAll>,
      string[],
      ICursor | null
    >({
      queryKey: ['comments'],
      queryFn: async ({ pageParam }) => {
        return await commentService.getAllPostComments(postId, LIMIT, pageParam)
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
