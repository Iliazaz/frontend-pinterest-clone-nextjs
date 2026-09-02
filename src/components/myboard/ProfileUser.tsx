'use client'

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useProfile } from '@/hook/user/useProfile'

export const ProfileUser = () => {
  const { data, isPending } = useProfile()
  return (
    <div className='flex flex-col justify-between gap-10'>
      <Link
        href='/'
        className='grid grid-cols-2 justify-between items-center gap-2 p-3 hover:bg-gray-100 rounded-xl'
      >
        {(data && !isPending) && (
          <div className='flex gap-5 items-center '>
            <Image
              className='rounded-full'
              width={60}
              height={60}
              src={data.data.avatar}
              alt={data.data.nickName}
            />
            <div className=''>
              <p className='font-bold text-lg'>{data.data.nickName}</p>
              <span className='text-secondary-text'>{data.data.email}</span>
            </div>
          </div>
        )}

        <Link href='/setting/edit-profile' className='flex justify-end'>
          <Button
            variant='secondary'
            className='bg-gray-200 h-12 w-52 rounded-lg cursor-pointer text-md'
          >
            Изменить профиль
          </Button>
        </Link>
      </Link>

      <div className='flex justify-end'>
        <Button className='py-6'>Создать</Button>
      </div>
    </div>
  )
}
