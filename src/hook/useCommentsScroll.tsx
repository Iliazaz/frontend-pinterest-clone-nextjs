import React from 'react'
import { useGetAllComments } from './comments/useGetAllComments'

export const useCommentsScroll = (id: string) => {
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useGetAllComments(id)

  const comments = data?.pages.flatMap((page) => page?.data.comments) ?? []

  React.useEffect(() => {
    const el = loadMoreRef?.current

    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]

        if (!entry.isIntersecting) return

        if (!hasNextPage) return

        if (isFetchingNextPage) return

        fetchNextPage()
      },
      {
        rootMargin: '500px',
      },
    )

    observer.observe(el)

    return () => {
      observer.disconnect
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return { comments, isPending, loadMoreRef }
}
