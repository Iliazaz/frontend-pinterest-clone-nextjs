'use client'

import React, { RefObject } from 'react'
import { PinCard } from './PinCard'
import { IPostSave } from '@/shared/types/save.interface'
import { NotItems } from './notItems'
import NotItemImage from '../../public/ill.palette.spot.light.svg.webp'
import { IFeedLiteResponse, IPostFeed } from '@/shared/types/feed.types'
import { useSavePost } from '@/hook/save/useSavePost'

interface IPinsBoardProps {
  loadMoreRef: RefObject<HTMLDivElement | null>
  pins: IPostSave[] | IPostFeed[]
}

export const PinBoard: React.FC<IPinsBoardProps> = ({ pins, loadMoreRef }) => {
  const { onSavePin, isPending } = useSavePost()
  return (
    <div
      ref={loadMoreRef}
      className={
        pins[0] === null || pins[0] === undefined || pins.length === 0  
          ? 'flex items-center justify-center'
          : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'
      }
    >
      {pins[0] === null || pins[0] === undefined || pins.length === 0 ? (
        <NotItems image={NotItemImage} textButton='Создать пин' />
      ) : (
        pins.map((pin) => (
          <PinCard key={pin.id} pin={pin} onSavePin={onSavePin} />
        ))
      )}
    </div>
  )
}
