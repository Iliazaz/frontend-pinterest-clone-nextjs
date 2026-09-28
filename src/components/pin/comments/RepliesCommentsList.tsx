import { IComments } from '@/shared/types/comments.interface'
import React from 'react'
import { ReplaceCommentsCard } from './ReplaceCommentsCard'

interface ReplaceCommentsList {
  comment: IComments
}

export const RepliesCommentsList: React.FC<ReplaceCommentsList> = ({
  comment,
}) => {
  const [openReplace, setOpenReplace] = React.useState<boolean>(false)

  return (
    <>
      {comment && (
        <div>
          <div
            onClick={() => setOpenReplace(!openReplace)}
            className={
              comment._count.replies
                ? 'flex gap-4 px-4 items-center text-xs font-bold text-secondary-text cursor-pointer'
                : 'hidden'
            }
          >
            <hr className='w-5 mt-0.5 border-0.5 rounded-xl border-secondary-text' />
            {openReplace ? (
              <span>Скрыть ответы</span>
            ) : (
              <span>Просмотреть {comment._count.replies} ответа</span>
            )}
          </div>
          <div
            className={`min-h-12  max-h-42 gap-8 px-12 pt-3 ${
              openReplace
                ? 'flex flex-col  overflow-y-scroll  scrollbar-none'
                : 'hidden'
            }`}
          >
            <ReplaceCommentsCard id={comment.id} />
          </div>
        </div>
      )}
    </>
  )
}
