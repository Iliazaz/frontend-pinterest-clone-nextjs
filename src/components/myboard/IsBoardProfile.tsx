'use client'

import { useGetAllDashBoard } from '@/hook/dashboard/useGetAllDashBoard'
import React from 'react'
import { DashBordCard } from '../DashBordCard'
import { SavePinsBoard } from './boards/pin/savePinsBoard'
import { CreatedBoardUser } from './boards/dashBoard/createdBoardUser'
import { IsBoardPinsProfile } from './IsBoardPinsProfile'
import { SavedBoard } from './boards/dashBoard/savedBoard'
import { IsPrivateBoardCreatedPins } from './boards/pin/isPrivateBoardCreatedPins'
import { IsPrivateBoard } from './boards/dashBoard/isPrivateBoard'

interface IsBoardProfileProps {
  activeSort: string
}

export const IsBoardProfile: React.FC<IsBoardProfileProps> = ({
  activeSort,
}) => {
  const { data, isPending } = useGetAllDashBoard()

  return (
    <div className='flex flex-col gap-5 mx-5 my-12'>
      {/* Рекомендованные доски */}
      <div className=''>
        {/* Карточка доски */}
        {activeSort === 'saved' ? (
          <SavedBoard />
        ) : activeSort === 'mine' ? (
          <CreatedBoardUser />
        ) : (
          <IsPrivateBoard />
        )}
      </div>

      <hr className='bg-secondary' />
      <div className='mb-4'>
        <div className='mb-3 block pt-10 pb-4'>
          <h2 className='font-bold text-xl mb-3'>
            Следите за тем, что вас вдохновляет
          </h2>
          <span className='text-secondary-text mb-8'>
            Доски позволяют упорядочивать сохраненные пины в коллекции. Начните
            с предложенных вариантов или создайте свою коллекцию.
          </span>
        </div>

        {/* Карточка доски */}
        {data?.map((items) => (
          <div className='mx-12'>
            <DashBordCard
              key={items.id}
              name={items.name}
              imageUrl={items.posts[0].imageURL}
            />
          </div>
        ))}
      </div>

      {/* Доски профиля пользователя */}
      <div className=''>
        <h2 className='font-bold text-xl mb-5'>Неотсортированные идеи</h2>

        {/* Карточки пинов */}
        <SavePinsBoard />
      </div>
    </div>
  )
}
