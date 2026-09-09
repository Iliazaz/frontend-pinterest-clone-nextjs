'use client'

import React from 'react'
import { useFeedLite } from './feed/useFeed'

export const useFeedPinScroll = () => {
  const loadMoreRef = React.useRef<HTMLDivElement | null>(null)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isPending } =
    useFeedLite()

  console.log(data)

  const pins = data?.pages.flatMap((page) => page.data.posts ?? []) ?? []

  console.log(pins)

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
      observer.disconnect()
    }
  }, [fetchNextPage, isFetchingNextPage, hasNextPage])

  return { pins, isPending, loadMoreRef }
}
