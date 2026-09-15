'use client'
import { NotItems } from '@/components/notItems'
import { PinCard } from '@/components/PinCard'
import { useGetByIdPost } from '@/hook/post/useGetByIdPost'
import { useGetPostUserIsPrivate } from '@/hook/post/useGetPostUserIsPrivate'
import { useSavePost } from '@/hook/save/useSavePost'
import React from 'react'
import NotItemImage from '../../../../../public/ill.palette.spot.light.svg.webp'

export const IsPrivateBoardCreatedPins: React.FC = () => {
  const { data, isPending } = useGetPostUserIsPrivate()
  const pins = data?.posts ? data?.posts : []
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
        <NotItems image={NotItemImage} textButton='Создать доску' />
      ) : (
        pins?.map((pin) => (
          <div key={pin.id} className=''>
            <PinCard key={pin.id} pin={pin} onSavePin={onSavePin} />
          </div>
        ))
      )}
    </div>
  )
}
