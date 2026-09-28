'use client'

import React from 'react'
import { ImageMain } from './ImageMain'
import { ButtonPins } from './ButtonPins'
import { Author } from './Author'
import { CommentsMain } from './comments/CommentsMain'
import { cn } from '@/lib/utils'
import { useGetByIdPost } from '@/hook/post/useGetByIdPost'
import { FormComments } from './comments/form-comments'

interface PinMainProps {
  id: string
  className?: string
}

export const PinMain: React.FC<PinMainProps> = ({ id, className }) => {
  const [liked, setLiked] = React.useState(false)

  const { data, isPending } = useGetByIdPost(id)

  React.useEffect(() => {
    const savedLiked = localStorage.getItem(`liked-${id}`)

    setLiked(savedLiked === 'true')
  }, [id])


  // ПОКА ВОТ ТАК ЧЕРЕЗ LOCALSTORAGE НО ПОТОМ НАДО ИСПРАВИТЬ И СДЕЛАТЬ ЧЕРЕЗ BACKEND
  const handleSetLiked: React.Dispatch<React.SetStateAction<boolean>> = (
    value,
  ) => {
    setLiked((prev) => {
      const next = typeof value === 'function' ? value(prev) : value

      localStorage.setItem(`liked-${id}`, String(next))

      return next
    })
  }

  if (isPending || !data) {
    return null
  }

  return (
    <div>
      <div
        className={cn(
          'relative flex justify-between items-center border border-secondary rounded-3xl',
          className,
        )}
      >
        <div className='relative flex justify-between border border-secondary-text rounded-3xl w-full'>
          <div className='flex items-center justify-end'>
            <ImageMain imageUrl={data.imageURL} />
          </div>

          <div className='flex flex-col justify-between w-full px-4 py-5'>
            <div>
              <ButtonPins
                postId={id}
                liked={liked}
                setLiked={handleSetLiked}
                likeCount={data._count.likes}
              />

              <div className='flex flex-col gap-3 px-3 pt-3'>
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

              <CommentsMain postId={id} commentsCount={data._count.comments} />
            </div>

            <FormComments postId={id} />
          </div>
        </div>
      </div>
    </div>
  )
}
