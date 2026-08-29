'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowPopoverProfile } from './ArrowPopoverProfile'
import { SearchHeaders } from './Search'
import { Button } from '../ui/button'
import { useGetMe } from '@/hook/auth/useGetMe'

interface IHeader {
  className?: string
}

export const Header: React.FC<IHeader> = ({ className }) => {
  // const { data, isPending } = useGetMe()

  return (
    <header
      className={cn('p-4 flex justify-between items-center gap-4', className)}
    >
      <SearchHeaders />

      {/* {data ? ( */}
        <div className='flex  items-center gap-2'>
          <Link className='bg-lime-600 p-4  rounded-full' href='/profile'>
            <Image className='bg-lime-600 m-1 rounded-full' src='' alt='' />
          </Link>

          <ArrowPopoverProfile />
        </div>
      {/* ) : ( */}
        <Button>
          <Link href={'/auth'}>Войти</Link>
        </Button>
      {/* )} */}
    </header>
  )
}
