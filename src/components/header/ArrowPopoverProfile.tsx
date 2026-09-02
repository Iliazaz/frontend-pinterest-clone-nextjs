'use client'

import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLogout } from '@/hook/auth/useLogout'
import { IAuthMe } from '@/shared/types/auth.interface'

interface IArrowPopoverProfile {
  data: IAuthMe
  className?: string
}

export const ArrowPopoverProfile: React.FC<IArrowPopoverProfile> = ({
  data,
  className,
}) => {
  const { isPending, onSubmit } = useLogout()
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
          href={`/profile/${data.id}`}
          className='flex gap-3 items-center p-3 rounded-sm hover:bg-state'
        >
          <Image
            width={60}
            height={60}
            className='bg-lime-600 rounded-full'
            src={data.avatar}
            alt='avatar'
          />

          <div className=''>
            <p className='font-bold '>{data.nickName}</p>
            <span className='text-disabled-text'>{data.email}</span>
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

        <div
          onClick={onSubmit}
          className='items-center p-2 font-semibold rounded-sm cursor-pointer hover:bg-state'
        >
          {isPending ? 'Выход...' : 'Выход'}
        </div>
      </PopoverContent>
    </Popover>
  )
}
