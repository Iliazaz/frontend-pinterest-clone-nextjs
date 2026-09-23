import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

interface ImageMainProps {
  imageUrl: string
  className?: string
}
export const ImageMain: React.FC<ImageMainProps> = ({
  imageUrl,
  className,
}) => {
  console.log(imageUrl)
  return (
    <div className={cn('relative rounded-3xl p-3', className)}>
      <img
        className='rounded-3xl'
        width={700}
        height={700}
        src={imageUrl}
        alt=''
      />
    </div>
  )
}
