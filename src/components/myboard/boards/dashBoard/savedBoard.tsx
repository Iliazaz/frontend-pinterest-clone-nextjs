'use client'
import NotItemImage from '../../../../../public/ill.pinboard.spot.light.svg.webp'
import { NotItems } from '@/components/notItems'
import { useGetAllDashBoard } from '@/hook/dashboard/useGetAllDashBoard'
import React from 'react'
import { DashBoardCardProfile } from '../DashBoardCardProfile'

export const SavedBoard: React.FC = () => {
  const { data, isPending } = useGetAllDashBoard()

  return (
    <div className='flex gap-5'>
      {/* Карточка доски */}

      {data === null || data === undefined || data.length === 0 ? (
        <div className='flex items-center justify-center w-full'>
          <NotItems image={NotItemImage} textButton='Создать пин' />
        </div>
      ) : (
        data?.map((items) => (
          <DashBoardCardProfile
            key={items.id}
            name={items.name}
            imageUrl={items.posts[0].imageURL}
          />
        ))
      )}
    </div>
  )
}
