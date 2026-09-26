'use client'

import { cn } from '@/lib/utils'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'
import { CommentsCard } from '../../CommentsCard'
import { CommentCardList } from './CommentCartList'

interface CommentsMainProps {
  postId: string
  commentsCount: number
  className?: string
}

export const CommentsMain: React.FC<CommentsMainProps> = ({
  postId,
  className,
  commentsCount,
}) => {
  const [openComments, setOpenComments] = React.useState<boolean>(false)

  return (
    <div className={cn('flex flex-col py-3 gap-3', className)}>
      <div className='flex items-center justify-between'>
        <span className='font-bold'>{commentsCount} комментарий</span>

        {openComments ? (
          <ChevronUp
            onClick={() => setOpenComments(false)}
            className='text-secondary-text w-8 h-8 '
          />
        ) : (
          <ChevronDown
            onClick={() => setOpenComments(true)}
            className='text-secondary-text w-8 h-8 '
          />
        )}
      </div>

      {/* Сам коммент */}

      <CommentCardList postId={postId} openComments={openComments} />
    </div>
  )
}
