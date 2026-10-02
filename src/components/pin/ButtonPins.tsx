import { useLikeDeletePost } from '@/hook/like/useDeleteLikePost'
import { useLikePost } from '@/hook/like/useLikePost'
import { ChevronDown, Ellipsis, Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

interface ButtonPinsProps {
  liked: boolean
  setLiked: React.Dispatch<React.SetStateAction<boolean>>
  setOpenComments: React.Dispatch<React.SetStateAction<boolean>>
  postId: string
  likeCount: number
  className?: string
}

export const ButtonPins: React.FC<ButtonPinsProps> = ({
  postId,
  liked,
  setLiked,
  setOpenComments,
  likeCount,

  className,
}) => {
  // ПОКА ВОТ ТАК ЧЕРЕЗ LOCALSTORAGE НО ПОТОМ НАДО ИСПРАВИТЬ И СДЕЛАТЬ ЧЕРЕЗ BACKEND
  const [localLikeCount, setLocalLikeCount] = React.useState(likeCount)

  const { onLikePost, isPending: isLikePending } = useLikePost()

  const { onLikeDeletePost, isPending: isUnlikePending } = useLikeDeletePost()

  const isPending = isLikePending || isUnlikePending

  React.useEffect(() => {
    setLocalLikeCount(likeCount)
  }, [likeCount])

  const handleLike = () => {
    if (isPending) return

    if (!liked) {
      setLiked(true)
      setLocalLikeCount((prev) => prev + 1)

      onLikePost(postId)
    } else {
      setLiked(false)
      setLocalLikeCount((prev) => Math.max(prev - 1, 0))

      onLikeDeletePost(postId)
    }
  }

  return (
    <div className={className ?? 'flex gap-3 justify-between'}>
      <div className='flex gap-6 items-center'>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className='flex gap-2 items-center'>
              <button
                type='button'
                onClick={handleLike}
                disabled={isPending}
                className='cursor-pointer p-3 rounded-sm hover:bg-secondary'
              >
                <Heart
                  width={25}
                  height={25}
                  fill={liked || likeCount < 0 ? 'currentColor' : 'none'}
                />
              </button>

              <span className='font-bold'>{localLikeCount}</span>
            </div>
          </TooltipTrigger>

          <TooltipContent className='p-3' side='bottom'>
            Отредактировать
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              onClick={() => setOpenComments(true)}
              type='button'
              className='cursor-pointer p-3 rounded-sm hover:bg-secondary'
            >
              <MessageCircle />
            </button>
          </TooltipTrigger>

          <TooltipContent className='p-3' side='bottom'>
            Комментарии
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <button
              type='button'
              className='cursor-pointer p-3 rounded-sm hover:bg-secondary'
            >
              <Ellipsis />
            </button>
          </TooltipTrigger>

          <TooltipContent className='p-3' side='bottom'>
            Другие действия
          </TooltipContent>
        </Tooltip>
      </div>

      <div className='flex gap-5'>
        <Button
          variant='ghost'
          className='py-6 cursor-pointer rounded-lg hover:bg-secondary'
        >
          Профиль
          <ChevronDown />
        </Button>

        <Button className='py-6'>Сохранить</Button>
      </div>
    </div>
  )
}
