import { IComments } from '@/shared/types/comments.interface'
import Image from 'next/image'
import React from 'react'

interface CommentsCardProps {
  data: IComments
}

export const CommentsCard: React.FC<CommentsCardProps> = ({ data }) => {
  return (
    <div className='flex gap-2'>
      <div className='rounded-full'>
        <Image
          className='rounded-full bg-Pinterest-red-hover'
          width={30}
          height={30}
          src={data.user.avatar}
          alt={data.user.nickName}
        />
      </div>
      <div className=''>
        <div className='flex gap-2'>
          <p className='font-bold'>{data.user.nickName}</p>
          <span>{data.text}</span>
        </div>
        <div className='flex gap-3 text-sm  '>
          <span className='text-secondary-text'>{data.createdAt}</span>
          <span className='font-bold text-secondary-text'>Ответить</span>
        </div>
      </div>
    </div>
  )
}
