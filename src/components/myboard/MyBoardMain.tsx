'use client'

import React from 'react'
import { DashBordCard } from '../DashBordCard'
import { ProfileUser } from './ProfileUser'
import { useRouter, useSearchParams } from 'next/navigation'
import { categoryFilters, sortFilters } from '@/constrants/filters-profile'
import { ITypeCategory, ITypesSort } from '@/shared/types/categoy.types'
import { SavePinsBoard } from './boards/pin/savePinsBoard'
import { CreatedBoardPins } from './boards/pin/createdBoardPins'
import { IsPrivateBoardCreatedPins } from './boards/pin/isPrivateBoardCreatedPins'
import { useGetAllDashBoard } from '@/hook/dashboard/useGetAllDashBoard'
import { IsBoardProfile } from './IsBoardProfile'
import { IsBoardPinsProfile } from './IsBoardPinsProfile'

export const MyBoardMain: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

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
        <IsBoardPinsProfile activeSort={activeSort} />
      ) : (
        // {/* Часть с досками */}
        <IsBoardProfile activeSort={activeSort} />
      )}
    </div>
  )
}
