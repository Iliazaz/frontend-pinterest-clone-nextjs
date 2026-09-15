'use client'

import { NotItems } from '@/components/notItems'
import { PinCard } from '@/components/PinCard'
import { usePinSaveScroll } from '@/hook/usePinSaveScroll'
import React from 'react'
import NotItemImage from '../../../../../public/ill.palette.spot.light.svg.webp'

import { useSavePost } from '@/hook/save/useSavePost'
import { PinBoard } from '@/components/PinBoard'

export const SavePinsBoard = () => {
  const { pins, isPending, loadMoreRef } = usePinSaveScroll()
  const { onSavePin } = useSavePost()

  return (
    <div>
      <PinBoard pins={pins} loadMoreRef={loadMoreRef} />
    </div>
  )
}
