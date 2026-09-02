'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowPopoverProfile } from './ArrowPopoverProfile'
import { SearchHeaders } from './Search'
import { Button } from '../ui/button'
import { useGetMe } from '@/hook/auth/useGetMe'
import { isAuthenticated } from '@/lib/server'
import { IAuthMe } from '@/shared/types/auth.interface'

interface IHeader {
  user: IAuthMe | null
  className?: string
}

export const Header: React.FC<IHeader> = ({ user, className }) => {
  return (
    <header
      className={cn('w-full p-4  flex justify-between items-center gap-4', className)}
    >
      <SearchHeaders />

      {user ? (
        <div className='flex items-center gap-2'>
          <Link className='p-1 rounded-md hover:bg-secondary' href={`/myboard/${user.nickName}`}>
            <Image
              width={45}
              height={45}
              className='bg-lime-600 rounded-full'
              src={user.avatar}
              alt={user.nickName}
            />
          </Link>

          <ArrowPopoverProfile data={user} />
        </div>
      ) : (
        <Button>
          <Link href='/auth'>Войти</Link>
        </Button>
      )}
    </header>
  )
}
