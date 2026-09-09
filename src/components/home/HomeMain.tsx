'use client'

import React from 'react'
import { PinBoard } from '../PinBoard'
import { useFeedPinScroll } from '@/hook/useFeedPinScroll'
import { Loading } from '../Loading'

export const HomeMain: React.FC = () => {
  const { isPending, loadMoreRef, pins } = useFeedPinScroll()

  return (
    <div className='px-4'>
      <div className='mb-6 mt-2 mx-4    '>
        <span className='border-b-2 border-black pb-1 font-bold text-sm '>
          Все
        </span>
      </div>
      {isPending ? (
        <Loading />
      ) : (
        pins && <PinBoard loadMoreRef={loadMoreRef} pins={pins} />
      )}
    </div>
  )
}
