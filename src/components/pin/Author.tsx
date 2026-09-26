import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface AuthorProps {
  id: string
  avatar: string
  nickName: string
  className?: string
}

export const Author: React.FC<AuthorProps> = ({
  id,
  avatar,
  nickName,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex gap-2 items-center text-sm ',
        className,
      )}
    >
      <div className='rounded-full'>
        <Image
          className='rounded-full bg-Pinterest-red-hover'
          width={25}
          height={25}
          src={avatar}
          alt={id}
        />
      </div>
      <p className='font-bold'>{nickName}</p>
    </div>
  )
}
