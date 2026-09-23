import { ChevronDown, Ellipsis, Heart, MessageCircle } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

interface ButtonPins {
  likeCount: number
  className?: string
}

export const ButtonPins: React.FC<ButtonPins> = ({ likeCount, className }) => {
  return (
    <div className='flex gap-3 justify-between'>
      <div className='flex gap-6 items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='cursor-pointer p-3 rounded-sm hover:bg-secondary'>
            <Heart width={25} height={25} />
          </div>
          <span className='font-bold'>{likeCount}</span>
        </div>

        <div className='cursor-pointer p-3 rounded-sm hover:bg-secondary'>
          <MessageCircle />
        </div>
        <div className='cursor-pointer p-3 rounded-sm hover:bg-secondary'>
          <Ellipsis />
        </div>
      </div>

      <div className='flex gap-5'>
        <Button
          variant={'ghost'}
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
