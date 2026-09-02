import { Download, Pen, PencilLine } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const PinCard: React.FC = () => {
  return (
    <div className='relative rounded-xl border-2 w-[300px] h-[300px]'>
      <Image className='h-full w-full rounded-xl' src='' alt='' />

      {/* При наведении */}
      <div className='absolute flex top-4 left-4 right-3 justify-between items-center'>
        <span className='font-bold'>Сохранено в..</span>

        <div className='bg-white rounded-[10px] p-2 border-2'>
          <Pen width={10} height={10} />
        </div>
      </div>

      <div className='absolute flex gap-1 bottom-2 right-3'>
        <div className='bg-white rounded-sm p-2 border-2'>
          <Download width={15} height={15} />
        </div>

        <div className='bg-white rounded-sm p-2 border-2'>
          <PencilLine width={15} height={15} />
        </div>
      </div>
    </div>
  )
}
