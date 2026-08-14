import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'

interface IArrowPopoverProfile {
  className?: string
}

export const ArrowPopoverProfile: React.FC<IArrowPopoverProfile> = ({
  className,
}) => {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          className={cn(
            'p-1 border-0 rounded-sm hover:bg-state cursor-pointer',
            className,
          )}
        >
          <ChevronDown color='#d1d5dc' width={20} />
        </div>
      </PopoverTrigger>
      <PopoverContent className='flex flex-col p-3 bg-main-bg'>
        <span className='font bold text-xs text-secondary-text px-3 mt-2'>
          Сейчас:
        </span>
        <Link
          href='/profile'
          className='flex gap-3 items-center p-3 rounded-sm hover:bg-state'
        >
          <Image className='bg-lime-600 p-6 rounded-full' src='' alt='' />

          <div className=''>
            <p className='font-bold '>nickName</p>
            <span className='text-disabled-text'>test@test.com</span>
          </div>
        </Link>

        <span className='font bold text-xs text-secondary-text px-3 mt-2'>
          Ваши аккаунты:
        </span>

        <Link
          href={'/register'}
          className='items-center p-2 font-semibold rounded-sm hover:bg-state'
        >
          Добавить аккаунт Pinterest
        </Link>

        <div className='items-center p-2 font-semibold rounded-sm hover:bg-state'>
          Выход
        </div>
      </PopoverContent>
    </Popover>
  )
}
