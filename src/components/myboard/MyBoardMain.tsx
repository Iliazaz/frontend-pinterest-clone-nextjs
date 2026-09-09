'use client'

import React from 'react'
import { PinBoard } from '../PinBoard'
import { DashBordCard } from '../DashBordCard'
import { ProfileUser } from './ProfileUser'
import { usePinSaveScroll } from '@/hook/usePinSaveScroll'

export const MyBoardMain: React.FC = () => {
  const { pins, isPending, loadMoreRef } = usePinSaveScroll()

  
  return (
    <div className='pb-2'>
      <div className='sticky z-20 bg-white top-0 bg-write grid grid-cols-2 justify-between px-26 py-6'>
        {/* Фильтры по пинам */}
        <div className='flex flex-col justify-between gap-10'>
          <h1 className='font-bold text-4xl'>Ваши сохраненные идеи</h1>

          <div className='flex gap-5 font-medium mx-2'>
            <span className='border-b-2 border-black pb-2'>Пины</span>
            <span>Доски</span>
          </div>

          <div className='flex gap-2 font-medium mx-2 '>
            <span className='bg-secondary text-sm px-4 py-2 rounded-lg'>
              Сохраненные
            </span>
            <span className='bg-secondary text-sm px-4 py-2 rounded-lg'>
              Мои
            </span>
            <span className='bg-secondary text-sm px-4 py-2 rounded-lg'>
              Приватные
            </span>
          </div>
        </div>

        {/* Данные пользователя */}
        <ProfileUser />
      </div>

      {/* Часть с пинами и досками */}
      <div className='flex flex-col gap-5 mx-5 my-12'>
        {/* Рекомендованные доски */}
        <div className=''>
          <h2 className='font-bold text-xl mb-5'>Рекомендуемые доски</h2>

          {/* Карточка доски */}
          <DashBordCard />
        </div>
        {/* Пины профиля пользователя */}

        <div className=''>
          <h2 className='font-bold text-xl mb-5'>Ваши сохраненные пины</h2>
          {/* Доска с пинами */}
          <PinBoard pins={pins} loadMoreRef={loadMoreRef} />
        </div>
      </div>
    </div>
  )
}
