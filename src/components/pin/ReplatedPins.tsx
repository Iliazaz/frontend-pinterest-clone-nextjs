'use client'

import React from 'react'
import { PinBoard } from '../PinBoard'
import { useGetReplatedPost } from '@/hook/replated/useGetReplatedPost'

interface ReplatedPinsProps {
  postId: string
}

export const ReplatedPins: React.FC<ReplatedPinsProps> = ({ postId }) => {
  const { data, isPending } = useGetReplatedPost(postId)

  if (!data) {
    return null
  }

  return (
    <div>
      <PinBoard pins={data?.data} />
    </div>
  )
}
