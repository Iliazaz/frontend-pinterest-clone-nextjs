'use client'

import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'
import { CommentCardList } from './CommentCartList'

interface CommentsMainProps {
  postId: string
  commentsCount: number
  openComments: boolean
  setOpenComments: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export const CommentsMain: React.FC<CommentsMainProps> = ({
  postId,
  openComments,
  setOpenComments,
  className,
  commentsCount,
}) => {
  return (
    <div className={cn('flex flex-col py-3 px-3 gap-3', className)}>
      <div className='flex items-center justify-between'>
        <span
          onClick={() => setOpenComments(!openComments)}
          className='font-bold cursor-pointer'
        >
          {commentsCount} комментарий
        </span>

        {openComments ? (
          <ChevronUp
            onClick={() => setOpenComments(false)}
            className='text-secondary-text w-8 h-8 cursor-pointer'
          />
        ) : (
          <ChevronDown
            onClick={() => setOpenComments(true)}
            className='text-secondary-text w-8 h-8 cursor-pointer'
          />
        )}
      </div>

      {/* Сам коммент */}

      <CommentCardList postId={postId} openComments={openComments} />
    </div>
  )
}
