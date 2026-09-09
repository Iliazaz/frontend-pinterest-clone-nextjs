'use client'

import React from 'react'
import { useGetSavePins } from './save/useGetSavePins'

export const usePinSaveScroll = () => {
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useGetSavePins()

  const pins = data?.pages.flatMap((page) => page?.data.posts) ?? []

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

  return { pins, isPending, loadMoreRef }
}
