'use client'

import { useDeleteComment } from '@/hook/comments/useDeleteComment'
import { IComments } from '@/shared/types/comments.interface'
import { Crown, Delete, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { FormReliesComment } from './pin/comments/form-replies-comment'

interface CommentsCardProps {
  postId: string
  comments: IComments
}

export const CommentsCard: React.FC<CommentsCardProps> = ({
  postId,
  comments,
}) => {
  const [openInput, setOpenInput] = React.useState<boolean>(false)
  const { data, isPending, onDeleteComment } = useDeleteComment()

  return (
    <>
      <div className='flex gap-2 '>
        <div className='rounded-full'>
          <Image
            className='rounded-full bg-Pinterest-red-hover'
            width={30}
            height={30}
            src={comments.user.avatar}
            alt={comments.user.nickName}
          />
        </div>
        <div className=''>
          <div className='flex gap-2'>
            <p className='font-bold'>{comments.user.nickName}</p>
            <span>{comments.text}</span>
          </div>
          <div className='flex gap-3 text-sm  '>
            <span className='text-secondary-text'>{comments.createdAt}</span>
            <span
              onClick={() => setOpenInput(true)}
              className='font-bold text-secondary-text cursor-pointer hover:opacity-70'
            >
              Ответить
            </span>
            <span
              onClick={() => onDeleteComment(comments.id)}
              className='font-bold text-secondary-text cursor-pointer hover:text-Pinterest-red-hover'
            >
              Удалить
            </span>
          </div>
        </div>
      </div>
      {openInput && (
        <FormReliesComment
          postId={postId}
          commentsId={comments.id}
          openInput={openInput}
          setOpenInput={setOpenInput}
        />
      )}
    </>
  )
}
