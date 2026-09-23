import React from 'react'
import { Input } from './input'
import { SendHorizontal } from 'lucide-react'

export const FormComments = () => {
  return (
    <div className='relative'>
      <Input
        className='p-6 rounded-full text-secondary-text text-xl '
        placeholder='Добавить комментарий'
      />

      <div className='absolute top-1.5 rounded-md right-3 p-2 bg-Pinterest-red hover:bg-Pinterest-red-hover group'>
        <SendHorizontal className='group-hover:text-white' />
      </div>
    </div>
  )
}
