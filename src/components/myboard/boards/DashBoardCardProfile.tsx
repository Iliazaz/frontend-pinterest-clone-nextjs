import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface DashBoardCardProfileProps {
  imageUrl: string
  name: string
  className?: string
}

export const DashBoardCardProfile: React.FC<DashBoardCardProfileProps> = ({
  className,
  imageUrl,
  name,
}) => {
  return (
    <div className={cn('flex flex-col', className)}>
      <Link
        href={'/'}
        className='w-[236px] h-[160px] relative rounded-xl bg-black border-black border-2 '
      >
        <img
          className='w-full h-full rounded-xl opacity-70'
          src={imageUrl}
          alt={name}
        />
      </Link>

      <div className='mx-1 mt-2 flex flex-col'>
        <Link href={'/'} className='text-lg font-bold '>
          {name}
        </Link>
        <span className='text-xs text-secondary-text'>24 пина</span>
      </div>
    </div>
  )
}
