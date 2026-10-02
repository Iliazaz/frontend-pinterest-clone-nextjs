import { FormFailed } from '@/components/ui/form-failed'
import { FormImageUpload } from '@/components/ui/form-image-upload'
import { FormInput } from '@/components/ui/form-input'
import { FormTextarea } from '@/components/ui/form-textarea'
import { SelectCard } from '@/components/ui/select-card'
import React from 'react'

export default function PinCreationToolPage() {
  // const [imageUrlData, setImageUrlData] = React.useState<File | null>(null)

  return (
    <div>
      <div>
        <hr />
        <h2 className='p-5 font-bold '>Создание пина</h2>
        <hr />
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex justify-between gap-5 my-8 '>
          {/* Загрузка картинки */}
          <div className=''>
            <FormImageUpload className=' m-9' />
          </div>
          <div className='w-[500px] flex flex-col gap-3'>
            <FormInput
              placeholder='Добавьте описание пину'
              type='text'
              label='Название'
              error=''
            />
            <FormTextarea
              placeholder='Опишите ваш пин'
              label='Описание'
              error=''
            />

            <SelectCard />
          </div>
        </div>
      </div>
    </div>
  )
}
