import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

export const DashBordCard: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-[236px] h-[160px] relative rounded-xl border-black border-2 '>
        <Image className='w-full h-full rounded-xl' src='' alt='' />
        <Button
          className='absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] py-6 rounded-lg cursor-pointer'
          variant={'outline'}
        >
          Создать
        </Button>
      </div>

      <div className='mx-1 mt-2'>
        <p className='text-lg font-bold '>Наименование доски</p>
        <span className='text-xs text-secondary-text'>24 пина</span>
      </div>
    </div>
  )
}
