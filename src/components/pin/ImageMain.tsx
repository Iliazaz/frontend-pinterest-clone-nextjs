import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, Maximize2, ScanSearch } from 'lucide-react'

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
    <div className='p-3 flex flex-1 justify-center items-center'>
      <div className='absolute top-4 left-4 rounded-lg  bg-white text-black opacity-70 hover:bg-gray-100 p-3'>
        <ArrowLeft width={30} height={30} />
      </div>
      <div
        // style={{ backgroundImage: `url(${imageUrl})` }}
        className={cn(
          `relative flex flex-1 justify-center items-center rounded-3xl bg-cover bg-center  bg-no-repeat`,
          className,
        )}
      >
        <img className='w-full h-full rounded-xl ' src={imageUrl} alt='' />
        <div className=' absolute right-2 bottom-2 gap-3 flex flex-col justify-end items-end  '>
          <div className='group min-w-12 min-h-12 rounded-lg gap-3 p-3 flex items-center justify-center opacity-70 bg-white '>
            <span className='hidden group-hover:block'>
              Показать в полном масштабе
            </span>
            <div className='bg-white text-black opacity-70 '>
              <Maximize2 width={25} height={25} />
            </div>
          </div>
          <div className='group min-w-12 min-h-12 rounded-lg gap-3 p-3 flex items-center justify-center opacity-70 bg-white '>
            <span className='hidden group-hover:block'>
              Поиск по изображению
            </span>

            <div className='bg-white text-black opacity-70  '>
              <ScanSearch width={25} height={25} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
