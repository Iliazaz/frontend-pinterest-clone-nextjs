import { useReplaceCommentsScroll } from '@/hook/useReplaceCommentsScroll'
import { cn } from '@/lib/utils'
import { IReplies, IRepliesResponse } from '@/shared/types/comments.interface'
import Image from 'next/image'
import React from 'react'

interface ReplaceCommentsCardProps {
  id: string
  className?: string
}
export const ReplaceCommentsCard: React.FC<ReplaceCommentsCardProps> = ({
  id,
  className,
}) => {
  const { replies } = useReplaceCommentsScroll(id)

  return (
    <>
      {' '}
      {replies.map((replace) => (
        <div key={replace.id} className={cn('flex gap-2', className)}>
          <div className='rounded-full'>
            <Image
              className='rounded-full bg-Pinterest-red-hover'
              width={30}
              height={30}
              src={replace.user.avatar}
              alt={replace.user.nickName}
            />
          </div>
          <div className=''>
            <div className='flex gap-2'>
              <p className='font-bold'>{replace.user.nickName}</p>
              <span>{replace.text}</span>
            </div>
            <div className='flex gap-3 text-sm'>
              <span className='text-secondary-text'>{replace.createdAt}</span>
              <span className='font-bold text-secondary-text'>Ответить</span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
