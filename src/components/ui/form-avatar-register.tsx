'use client'

import React from 'react'
import { Input } from './input'
import { ImageDown, X } from 'lucide-react'
import { Button } from './button'
import { toast } from 'sonner'
import Image from 'next/image'

interface FormAvatarRegister {
  setAvatarData: React.Dispatch<React.SetStateAction<File | null>>
}

export const FormAvatarRegister: React.FC<FormAvatarRegister> = ({
  setAvatarData,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [preview, setPreview] = React.useState<string | null>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Выберите изображение')
      return
    }

    const reader = new FileReader()
    reader.onloadend = () => setPreview(reader.result as string)
    reader.readAsDataURL(file)

    setAvatarData(file)
  }

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (inputRef.current) {
      inputRef.current.value = ''
    }

    setPreview(null)

    setAvatarData(null)
  }

  return (
    <div
      // ref={inputRef}
      onClick={handleClick}
      className='relative   group  w-full h-42 flex flex-col justify-center gap-5 items-center border border-light-border rounded-2xl hover:bg-secondary hover:border-Pinterest-red-hover cursor-pointer'
    >
      <Input
        ref={inputRef}
        type='file'
        onChange={handleChange}
        className='hidden'
        placeholder=''
      />

      {preview ? (
        <div className='h-32 w-32 rounded-2xl'>
          <img
            src={preview}
            alt='Avatar'
            className='w-full h-full object-cover rounded-lg'
          />

          <Button
            onClick={handleRemoveImage}
            className='absolute w-8 h-8 top-3 right-[26%] bg-gray-300 rounded-full hover:bg-gray-200'
          >
            <X width={15} height={15} />
          </Button>
        </div>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <ImageDown
            width={45}
            height={45}
            className='text-secondary-text group-hover:text-Pinterest-red-hover'
          />
          <span className='text-sm text-disabled-text group-hover:text-red-400'>
            Загрузить аватарку
          </span>
          <Button
            type='button'
            size='default'
            className='mt-2 bg-secondary-text group-hover:bg-Pinterest-red-hover animate-none'
          >
            Выбрать
          </Button>
        </div>
      )}
    </div>
  )
}
