import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

interface NotItemsProps {
  image: StaticImageData
  textButton: string
  className?: string
}

export const NotItems: React.FC<NotItemsProps> = ({
  image,
  textButton,
  className,
}) => {
  return (
    <div className=''>
      <div
        className={cn(
          'flex flex-col items-center gap-3 w-[400px] justify-center p-5',
          className,
        )}
      >
        <Image src={image} alt='notItem' />

        <div className='flex flex-col text-center justify-center items-center'>
          <h3 className='font-bold text-lg'>Упорядочивайте идеи</h3>
          <span className='text-sm text-secondary-text'>
            Пины — это искры вдохновения. Доски — это место, где они находятся.
            Создавайте доски, чтобы упорядочивать пины по своему вкусу
          </span>
        </div>

        <Link href={'/'}>
          <Button>{textButton}</Button>
        </Link>
      </div>
    </div>
  )
}
