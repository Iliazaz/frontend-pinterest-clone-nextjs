'use client'

import { Button } from '@/components/ui/button'
import { categoryPinsProfile } from '@/constrants/filters-profile'
import { ITypeCategoryPinsProfile } from '@/shared/types/categoy.types'
import { Pen } from 'lucide-react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { SavePinsBoard } from '../myboard/boards/pin/savePinsBoard'
import { CreatedBoardPins } from '../myboard/boards/pin/createdBoardPins'
import { useProfile } from '@/hook/user/useProfile'

export const ProfileMain: React.FC = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const { data, isPending } = useProfile()
  const activeCategory = searchParams.get('pins')

  const handleCategory = (
    typeCategoryPinsProfile: ITypeCategoryPinsProfile,
  ) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('pins', typeCategoryPinsProfile)

    router.replace(`?${params.toString()}`)
  }
  return (
    <div className=''>
      <div className='px-24 py-12 flex flex-col gap-5'>
        {data && !isPending && (
          <div className='flex gap-6 items-center'>
            <div className='relative'>
              <Image
                width={120}
                height={120}
                className='bg-lime-600 rounded-full'
                src={data.data.avatar}
                alt='avatar'
              />

              <Button className='absolute right-2 bottom-0 bg-white border-1 border-black p-3 hover:bg-gray-100'>
                <Pen color='#000000' />
              </Button>
            </div>
            <div className=''>
              <p className='font-bold text-3xl'>{data.data.nickName}</p>
              <span className='text-sm text-secondary-text'>
                {data.data.email}
              </span>
            </div>
          </div>
        )}
        <span className='flex gap-2 items-center'>
          Добавьте сведения о себе для уникальности профиля{' '}
          <Pen color='#222222' width={15} height={15} />
        </span>

        <Button
          variant='secondary'
          className='bg-gray-200 h-12 w-52 rounded-lg cursor-pointer text-md'
        >
          <Pen color='#222222' /> Изменить профиль
        </Button>
      </div>

      <div className='flex my-3 gap-2 items-center justify-center font-medium mx-2 '>
        {categoryPinsProfile.map((types) => (
          <span
            key={types.value}
            onClick={() => handleCategory(types.value)}
            className={
              activeCategory === types.value
                ? ' border-b-2 border-black font-bold text-sm px-4 py-2 cursor-pointer'
                : 'text-sm px-4 py-2 cursor-pointer font-bold rounded-lg hover:bg-secondary'
            }
          >
            {types.label}
          </span>
        ))}
      </div>

      <div className='my-5 mx-3'>
        {/* Доска с пинами */}
        {activeCategory === 'saved' ? <SavePinsBoard /> : <CreatedBoardPins />}
      </div>
    </div>
  )
}
