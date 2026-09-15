'use client'

import { NotItems } from '@/components/notItems'
import { useGetPostIsUser } from '@/hook/post/useGetPostIsUser'
import NotItemImage from '../../../../public/ill.palette.spot.light.svg.webp'

import React from 'react'
import { PinCard } from '@/components/PinCard'
import { useSavePost } from '@/hook/save/useSavePost'

export const CreatedBoardPins: React.FC = () => {
  const { data, isPending } = useGetPostIsUser()
  const pins = data ? data : []
  const { onSavePin } = useSavePost()

  return (
    <div
      className={
        pins[0] === null || pins[0] === undefined || pins.length === 0
          ? 'flex items-center justify-center'
          : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
      }
    >
      {pins === null || pins === undefined || pins.length === 0 ? (
        <NotItems image={NotItemImage} textButton='Создать пин' />
      ) : (
        pins?.map((pin) => (
          <div key={pin.id} className=''>
            {pin?.posts.map((item) => (
              <PinCard key={pin.id} pin={item} onSavePin={onSavePin} />
            ))}
          </div>
        ))
      )}
    </div>
  )
}
