'use client'
import React from 'react'
import { CommentsCard } from '../../CommentsCard'
import { useCommentsScroll } from '@/hook/useCommentsScroll'
import { ReplaceCommentsCard } from './ReplaceCommentsCard'
import { useReplaceCommentsScroll } from '@/hook/useReplaceCommentsScroll'
import { IComments } from '@/shared/types/comments.interface'
import { RepliesCommentsList } from './RepliesCommentsList'

interface CommentCardListProps {
  postId: string
  openComments: boolean
  className?: string
}

export const CommentCardList: React.FC<CommentCardListProps> = ({
  postId,
  openComments,
  className,
}) => {
  const { comments, isPending, loadMoreRef } = useCommentsScroll(postId)


  return (
    <div
      className={
        comments.length < 0
          ? 'hidden'
          : `min-h-42 max-h-56   gap-8 mb-8 ${
              openComments
                ? 'flex flex-col  overflow-y-scroll scrollbar-none'
                : 'flex flex-col'
            }`
      }
    >
      {comments.length > 0 && openComments ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            ref={loadMoreRef}
            className='px-2 flex flex-col gap-2'
          >
            <CommentsCard postId={postId} comments={comment} />
            <RepliesCommentsList comment={comment} />
          </div>
        ))
      ) : (
        <div ref={loadMoreRef} className='px-2 flex flex-col gap-2'>
          {comments[0] && (
            <CommentsCard postId={postId} comments={comments[0]} />
          )}
          <RepliesCommentsList comment={comments[0]}/>
        </div>
      )}
    </div>
  )
}
