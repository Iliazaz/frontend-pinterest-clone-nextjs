'use client'

import { DashBordCard } from '@/components/DashBordCard'
import { NotItems } from '@/components/notItems'
import { useGetAllDashBoard } from '@/hook/dashboard/useGetAllDashBoard'
import React from 'react'
import NotItemImage from '../../../../../public/ill.pinboard.spot.light.svg.webp'

export const CreatedBoardUser = () => {
  const { data, isPending } = useGetAllDashBoard()

  return (
    <div className=''>
      {/* Карточка доски */}

      {data === null || data === undefined || data.length === 0 ? (
       <div className='flex items-center justify-center'>
          <NotItems image={NotItemImage} textButton='Создать доску' />
        </div>
      ) : (
        data?.map((items) => (
          <DashBordCard
            key={items.id}
            name={items.name}
            imageUrl={items.posts[0].imageURL}
          />
        ))
      )}
    </div>
  )
}
