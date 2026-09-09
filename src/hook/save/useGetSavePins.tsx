import { saveService } from '@/services/endpoints/save/save.serive'
import { useInfiniteQuery } from '@tanstack/react-query'

const LIMIT = 20

export const useGetSavePins = () => {
  const { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['save'],

      queryFn: async ({ pageParam }) => {
        return await saveService.getSavePin(LIMIT, pageParam)
      },

      initialPageParam: null,

      getNextPageParam: (lastPage) => {
        return lastPage?.data?.nextCursor ?? undefined
      },
    })

  return { data, isPending, fetchNextPage, hasNextPage, isFetchingNextPage }
}
