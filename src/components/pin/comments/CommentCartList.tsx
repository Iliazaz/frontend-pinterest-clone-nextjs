import React from 'react'
import { CommentsCard } from '../../CommentsCard'
import { useCommentsScroll } from '@/hook/useCommentsScroll'

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
  const [openReplace, setOpenReplace] = React.useState<boolean>(false)
  const { comments, isPending, loadMoreRef } = useCommentsScroll(postId)
  return (
    <div
      className={
        comments.length < 0
          ? 'hidden'
          : `min-h-36 max-h-64 gap-8 ${
              openComments
                ? 'flex flex-col  overflow-y-scroll scrollbar-none'
                : 'flex flex-col'
            }`
      }
    >
      {comments.length < 0 && comments.map((comment) => (
        <div
          key={comment.id}
          ref={loadMoreRef}
          className='px-2 flex flex-col gap-2'
        >
          <CommentsCard data={comment} />
          <div
            onClick={() => setOpenReplace(!openReplace)}
            className='flex gap-4 px-4 items-center text-xs font-bold text-secondary-text cursor-pointer'
          >
            <hr className='w-5 mt-0.5 border-0.5 rounded-xl border-secondary-text' />
            {openReplace ? (
              <span>Скрыть ответы</span>
            ) : (
              <span>Просмотреть 4 ответа</span>
            )}
          </div>{' '}
          <div
            className={`min-h-24 max-h-42 gap-8 px-12 pt-3 ${
              openReplace
                ? 'flex flex-col  overflow-y-scroll  scrollbar-none'
                : 'hidden'
            }`}
          >
            
            <CommentsCard data={comments[1]} />
          </div>
        </div>
      ))}
    </div>
  )
}
