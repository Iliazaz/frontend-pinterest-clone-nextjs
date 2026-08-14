import React from 'react'
import { Input } from '../ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/shared/lib/utils'
import { ArrowPopoverProfile } from './ArrowPopoverProfile'
import { Search } from 'lucide-react'
import { SearchHeaders } from './Search'

interface IHeader {
  className?: string
}

export const Header: React.FC<IHeader> = ({ className }) => {
  return (
    <header
      className={cn('p-4 flex justify-between items-center gap-4', className)}
    >
      <SearchHeaders />
      <div className='flex  items-center gap-2'>
        <Link className='bg-lime-600 p-4  rounded-full' href='/profile'>
          <Image className='bg-lime-600 m-1 rounded-full' src='' alt='' />
        </Link>

        <ArrowPopoverProfile />
      </div>
    </header>
  )
}
