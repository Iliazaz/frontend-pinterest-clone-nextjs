'use client'

import React from 'react'
import { Input } from './input'
import { SendHorizontal } from 'lucide-react'
import { useCreateComments } from '@/hook/comments/useCreateComments'
import { Button } from './button'

interface FormCommentsProps {
  postId: string
  className?: string
}

export const FormComments: React.FC<FormCommentsProps> = ({
  postId,
  className,
}) => {
  const { data, isPending, onCreateComments, form } = useCreateComments(postId)
  return (
    <form onSubmit={form.handleSubmit(onCreateComments)} className='relative'>
      <Input
        className='p-6 rounded-full test-black text-xl '
        placeholder='Добавить комментарий'
        {...form.register('text', {
          required: 'Текст обязателен',
        })}
      />

      <Button  className='absolute w-10 top-1.5 rounded-md right-3  text-black bg-Pinterest-red hover:bg-Pinterest-red-hover group'>
        <SendHorizontal className=' w-5 h-5 group-hover:text-white' />
      </Button>
    </form>
  )
}
