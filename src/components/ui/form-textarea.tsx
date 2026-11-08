import { cn } from '@/lib/utils'
import React from 'react'
import { Input } from './input'
import { Textarea } from './textarea'

interface FormTextareaProps {
  inEnter: boolean
  placeholder: string
  error: string
  label: string
  value?: string
  onChange?: (e: any) => void
  className?: string
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
  placeholder,
  inEnter,
  error,
  label,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        `border rounded-xl py-4 px-3 ${inEnter ? 'focus-within:border-Pinterest-red-hover bg-white text-black' : ' text-secondary-text bg-secondary cursor-not-allowed group'}`,
        className,
      )}
    >
      <div className='flex flex-col gap-3'>
        <label className='text-xs px-2 font-bold' htmlFor=''>
          {label}
        </label>
        <Textarea
          className=' hover:border-0 border-0  outline-none border-none placeholder:text-md focus-visible:border-none
          focus-visible:ring-0
          '
          placeholder={placeholder}
          {...props}
        />
        {error && (
          <span className='text-xs text-red-500 font-bold px-2'>* {error}</span>
        )}
      </div>
    </div>
  )
}
