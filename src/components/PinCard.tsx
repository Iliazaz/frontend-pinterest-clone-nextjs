import { IPostSave } from '@/shared/types/save.interface'
import { Download, Pen, PencilLine } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { useGetByIdPost } from '@/hook/post/useGetByIdPost'
import Link from 'next/link'

interface IPinCardProps {
  pin: IPostSave
  onSavePin: (postId: string) => void
  className?: string
}

export const PinCard: React.FC<IPinCardProps> = ({ pin, onSavePin }) => {
  const [isSaved, setIsSaved] = React.useState<boolean>(false) // Наверное надо делать будет глобальным значением

  const handleSaved = (postId: string) => {
    setIsSaved(true)
    onSavePin(postId)
  }

  return (
    <div className='group relative rounded-xl '>
        <img src={pin.imageURL} alt={pin.id} className='w-full rounded-xl cursor-pointer ' />
      {/* При наведении */}
      <div className='hidden group-hover:block absolute top-0 w-full rounded-xl h-full group-hover:bg-black/10'>

        {!isSaved ? (
          <div
            onClick={() => handleSaved(pin.id)}
            className='flex items-center justify-end'
          >
            <Button className='px-7 py-6 m-3'>Сохранить</Button>
          </div>
        ) : (
          <div
            className='absolute flex top-0 left-0 right-0 py-4 pl-4 p-3 rounded-t-xl  justify-between items-center     
'
          >
            <span className='font-bold'>Сохранено в..</span>

            <div className='bg-white rounded-[10px] p-2 border-2'>
              <Pen width={10} height={10} />
            </div>
          </div>
        )}

        <div className='absolute flex gap-1 bottom-2 right-3'>
          <div className='bg-white rounded-sm p-2 border-2'>
            <Download width={15} height={15} />
          </div>

          <div className='bg-white rounded-sm p-2 border-2'>
            <PencilLine width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  )
}
