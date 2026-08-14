'use client'

import React from 'react'
import { Input } from './input'
import { ImageDown } from 'lucide-react'
import { Button } from './button'

export const FormAvatarRegister = () => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className='group  w-full h-42 flex flex-col justify-center gap-5 items-center border border-light-border rounded-2xl hover:bg-secondary hover:border-Pinterest-red-hover cursor-pointer'>
      <Input ref={inputRef} type='file' className='hidden' placeholder='' />
      <div className='absolute flex flex-col items-center justify-center'>
        <ImageDown
          width={45}
          height={45}
          className='text-secondary-text group-hover:text-Pinterest-red-hover'
        />
        <span className='text-sm text-disabled-text group-hover:text-red-400'>
          Загрузить аватарку
        </span>
        <Button
          size='default'
          className='mt-2 bg-secondary-text group-hover:bg-Pinterest-red-hover animate-none'
        >
          Выбрать
        </Button>
      </div>
    </div>
  )
}
