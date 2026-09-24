import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface CommentsMainProps {
  className?: string
}

export const CommentsMain: React.FC<CommentsMainProps> = ({ className }) => {
  return (
    <div className={cn('flex flex-col py-3 gap-3', className)}>
      <div className='flex items-center justify-between'>
        <span className='font-bold'>1 комментарий</span>
        <ChevronDown className='text-secondary-text w-8 h-8 ' />
      </div>

      {/* Сам коммент */}
      <div className='flex gap-2 px-2'>
        <Image
          className='rounded-full bg-Pinterest-red-hover'
          width={30}
          height={30}
          src=''
          alt=''
        />
        <div className=''>
          <div className='flex gap-2'>
            <p className='font-bold'>Ekmekarasıolivertree0626</p>
            <span>roblox woman face</span>
          </div>
          <div className='flex gap-3 text-sm  '>
            <span className='text-secondary-text'>3 мес.</span>
            <span className='font-bold text-secondary-text'>Ответить</span>
          </div>
        </div>
      </div>
    </div>
  )
}
