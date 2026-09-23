'use client'

import React from 'react'
import { ImageMain } from './ImageMain'
import { ButtonPins } from './ButtonPins'
import { Author } from './Author'
import { CommentsMain } from './CommentsMain'
import { FormComments } from '../ui/form-comments'
import { cn } from '@/lib/utils'
import { useGetByIdPost } from '@/hook/post/useGetByIdPost'

interface PinMainProps {
  id: string
  className?: string
}

export const PinMain: React.FC<PinMainProps> = ({ id, className }) => {
  const { data, isPending } = useGetByIdPost(id)

  return (
    <div>
      {/* Все и вся про открытый пин */}
      {data && (
        <div
          className={cn(
            'relative flex justify-between items-center border border-secondary ',
            className,
          )}
        >
          <div className='relative flex justify-between  border border-secondary-text rounded-3xl w-full'>
            <ImageMain imageUrl={data.imageURL} />

            <div className='flex flex-col justify-between  w-full  px-4 py-5'>
              <div className=''>
                {/* Лайки комментарии и т.д */}

                <ButtonPins likeCount={data._count.likes} />
                {/* Автор */}

                <Author
                  id={data.user.id}
                  avatar={data.user.avatar}
                  nickName={data.user.nickName}
                />

                <hr />

                {/* Комментарии */}
                <CommentsMain />
              </div>
              <FormComments />
            </div>
          </div>
        </div>
      )}
      {/* Подборка похожих пинов */}
    </div>
  )
}
