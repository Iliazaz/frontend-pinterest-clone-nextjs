import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from './input'
import { Textarea } from './textarea'

interface FormTextareaProps {
  placeholder: string
  error: string
  label: string
  className?: string
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  placeholder,
  error,
  label,
  className,
}) => {
  return (
    <div
      className={cn(
        'border rounded-xl bg-secondary py-4 px-3 focus-within:border-Pinterest-red-hover  group',
        className,
      )}
    >
      <div className='flex flex-col gap-3'>
        <label
          className='text-xs text-secondary-text px-2 font-bold'
          htmlFor=''
        >
          {label}
        </label>
        <Textarea
          className=' hover:border-0 border-0  outline-none border-none placeholder:text-md focus-visible:border-none
          focus-visible:ring-0
          '
          placeholder={placeholder}
        />
        {error && (
          <span className='text-xs text-red-500 font-bold px-2'>* {error}</span>
        )}
      </div>
    </div>
  )
}
