'use client'

import React from 'react'
import { PinBoard } from '../PinBoard'
import { DashBordCard } from '../DashBordCard'
import { ProfileUser } from './ProfileUser'
import { usePinSaveScroll } from '@/hook/usePinSaveScroll'
import { useRouter, useSearchParams } from 'next/navigation'
import { categoryFilters, sortFilters } from '@/constrants/filters-profile'
import { ITypeCategory, ITypesSort } from '@/shared/types/categoy.types'
import { SavePinsBoard } from './board/savePinsBoard'
import { CreatedBoardPins } from './board/createdBoardPins'
import { IsPrivateBoardCreatedPins } from './board/isPrivateBoardCreatedPins'
import { useGetAll } from '@/hook/dashboard/useGetAllDashBoard'

export const MyBoardMain: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data, isPending } = useGetAll()

  const activeSort = searchParams.get('sort') ?? 'saved'
  const activeCategory = searchParams.get('category') ?? 'pins'

  const handleCategory = (typeCategory: ITypeCategory) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('category', typeCategory)

    router.replace(`?${params.toString()}`)
  }

  const handleSort = (typesSort: ITypesSort) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('sort', typesSort)

    router.replace(`?${params.toString()}`)
  }

  return (
    <div className='pb-2'>
      <div className='sticky z-20 bg-white top-0 bg-write grid grid-cols-2 justify-between px-26 py-6'>
        {/* Фильтры по пинам */}
        <div className='flex flex-col justify-between gap-10'>
          <h1 className='font-bold text-4xl'>Ваши сохраненные идеи</h1>

          <div className='flex gap-5 font-medium mx-2'>
            {categoryFilters.map((item) => (
              <span
                key={item.value}
                onClick={() => handleCategory(item.value)}
                className={
                  activeCategory === item.value
                    ? 'border-b-2 border-black pb-2 cursor-pointer'
                    : 'pb-2 cursor-pointer'
                }
              >
                {item.label}
              </span>
            ))}
          </div>

          <div className='flex gap-2 font-medium mx-2 '>
            {sortFilters.map((sort) => (
              <span
                key={sort.value}
                onClick={() => handleSort(sort.value)}
                className={
                  activeSort === sort.value
                    ? 'bg-pinterest-red text-white text-sm px-4 py-2 rounded-lg cursor-pointer'
                    : 'bg-secondary text-sm px-4 py-2 rounded-lg cursor-pointer'
                }
              >
                {sort.label}
              </span>
            ))}
          </div>
        </div>

        {/* Данные пользователя */}
        <ProfileUser />
      </div>

      {activeCategory === 'pins' ? (
        // {/* Часть с пинами */}
        <div className='flex flex-col gap-5 mx-5 my-12'>
          {/* Рекомендованные доски */}
          <div className=''>
            <h2 className='font-bold text-xl mb-5'>Рекомендуемые доски</h2>

            {/* Карточка доски */}

            {data?.map((items) => (
              <DashBordCard
                key={items.id}
                name={items.name}
                imageUrl={items.posts[0].imageURL}
              />
            ))}
          </div>

          {/* Пины профиля пользователя */}
          <div className=''>
            <h2 className='font-bold text-xl mb-5'>Ваши сохраненные пины</h2>
            {/* Доска с пинами */}
            {activeSort === 'saved' ? (
              <SavePinsBoard />
            ) : activeSort === 'mine' ? (
              <CreatedBoardPins />
            ) : (
              <IsPrivateBoardCreatedPins />
            )}
            {/* <PinBoard pins={pins} loadMoreRef={loadMoreRef} /> */}
          </div>
        </div>
      ) : (
        // {/* Часть с досками */}
        <div className='flex flex-col gap-5 mx-5 my-12'>
          {/* Рекомендованные доски */}
          <div className=''>
            {/* Карточка доски */}
            {data?.map((items) => (
              <DashBordCard
                key={items.id}
                name={items.name}
                imageUrl={items.posts[0].imageURL}
              />
            ))}
          </div>

          <hr className='bg-secondary' />
          <div className='mb-4'>
            <div className='mb-3 block pt-10 pb-4'>
              <h2 className='font-bold text-xl mb-3'>
                Следите за тем, что вас вдохновляет
              </h2>
              <span className='text-secondary-text mb-8'>
                Доски позволяют упорядочивать сохраненные пины в коллекции.
                Начните с предложенных вариантов или создайте свою коллекцию.
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

            {/* Карточка доски */}
            {data?.map((items) => (
              <DashBordCard
                key={items.id}
                name={items.name}
                imageUrl={items.posts[0].imageURL}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
