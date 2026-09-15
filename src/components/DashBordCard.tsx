import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface IDashBoardCard {
  imageUrl: string
  name: string
  className?: string
}

export const DashBordCard: React.FC<IDashBoardCard> = ({
  imageUrl,
  name,
  className,
}) => {
  console.log(imageUrl)
  return (
    <div className={cn('flex flex-col', className)}>
      <div className='w-[236px] h-[160px] relative rounded-xl bg-black border-black border-2 '>
        <img className='w-full h-full rounded-xl opacity-70' src={imageUrl} alt={name} />

        <Button
          className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] py-6 rounded-lg cursor-pointer hover:bg-secondary'
          variant={'outline'}
        >
          Создать
        </Button>
      </div>

      <div className='mx-1 mt-2'>
        <p className='text-lg font-bold '>{name}</p>
        <span className='text-xs text-secondary-text'>24 пина</span>
      </div>
    </div>
  )
}
