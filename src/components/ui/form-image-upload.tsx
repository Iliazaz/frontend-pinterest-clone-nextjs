'use client'

import React from 'react'
import { Input } from './input'
import { ImageDown, X } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from './button'
import { cn } from '@/lib/utils'

interface FormImageUploadProps {
  setImage: React.Dispatch<React.SetStateAction<File | null>>
  className?: string
}

export const FormImageUpload: React.FC<FormImageUploadProps> = ({
  setImage,
  className
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

    setImage(file)
  }

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (inputRef.current) {
      inputRef.current.value = ''
    }

    setPreview(null)

    setImage(null)
  }

  return (
    <div
      onClick={handleClick}
      className='relative group  flex flex-col justify-center gap-5 items-center border border-light-border rounded-2xl hover:bg-secondary hover:border-Pinterest-red-hover cursor-pointer bg-secondary'
    >
      <Input
        ref={inputRef}
        onChange={handleChange}
        type='file'
        className='hidden'
      />

      {preview ? (
        <div className=' p-7 max-h-[600px] min-h-[100px] rounded-2xl'>
          <img
            src={preview}
            alt='Avatar'
            className='w-full h-full object-cover rounded-lg'
          />

          <Button
            onClick={handleRemoveImage}
            className='absolute w-8 h-8 top-3 right-4 bg-gray-300 rounded-full hover:bg-gray-200'
          >
            <X width={15} height={15} />
          </Button>
        </div>
      ) : (
        <div className={cn('w-full h-full py-5 px-12 flex flex-col items-center justify-between text-center ', className)}>
          <div className='flex items-center my-[25%] flex-col justify-center'>
            <ImageDown
              width={35}
              height={35}
              className='text-secondary-text group-hover:text-Pinterest-red-hover'
            />
            <p className='font-bold text-sm mt-3 group-hover:text-Pinterest-red-hover'>
              Загрузите медиафайлы
            </p>
            <span className='text-sm group-hover:text-Pinterest-red-hover w-36'>
              Выберите файл в проводник, кликнув по блоку
            </span>
          </div>

          <p className='text-sm group-hover:text-Pinterest-red-hover'>
            JPG, JPEG, PNG, WEBP
          </p>
        </div>
      )}
    </div>
  )
}
