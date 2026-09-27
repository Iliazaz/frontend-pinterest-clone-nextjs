'use client'

import React from 'react'
import { ImageMain } from './ImageMain'
import { ButtonPins } from './ButtonPins'
import { Author } from './Author'
import { CommentsMain } from './comments/CommentsMain'
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
            <div className='flex items-center justify-end'>
              <ImageMain imageUrl={data.imageURL} />
            </div>
            <div className='flex flex-col justify-between  w-full  px-4 py-5'>
              <div className=''>
                {/* Лайки комментарии и т.д */}

                <ButtonPins likeCount={data._count.likes} />
                {/* Автор */}
                <div className='flex flex-col gap-3 px-3 pt-3 '>
                  <div>
                    <Author
                      id={data.user.id}
                      avatar={data.user.avatar}
                      nickName={data.user.nickName}
                    />

                    <h2
                      className={
                        !data.title ? 'hidden' : 'font-bold text-2xl pt-2'
                      }
                    >
                      {data.title}
                    </h2>
                  </div>

                  <div className={!data.description ? 'hidden' : ''}>
                    <p className='font-bold pb-3'>Описание</p>
                    <span className='text-secondary-text'>
                      {data.description}
                    </span>
                  </div>
                  <hr />
                </div>
                {/* Комментарии */}
                <CommentsMain
                  postId={id}
                  commentsCount={data._count.comments}
                />
              </div>
              
              <FormComments postId={id}/>
            </div>
          </div>
        </div>
      )}
      {/* Подборка похожих пинов */}
    </div>
  )
}
