import React from 'react'
import { Input } from './input'
import { Eye, EyeClosed } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FormFailedProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  visiblePassword?: boolean
  showPasswordToggle?: (value: boolean) => void
}

export const FormFailed = React.forwardRef<HTMLInputElement, FormFailedProps>(
  (
    { className, error, visiblePassword, showPasswordToggle, ...props },
    ref,
  ) => {
    return (
      <>
        {error && (
          <span className='text-red-500 text-sm mt-1'>{'*' + error}</span>
        )}
        <div className='relative w-full'>
          <Input
            ref={ref}
            className={cn('p-6', error && 'border-red-500', className)}
            {...props}
          />

          {showPasswordToggle && (
            <div
              onClick={() => showPasswordToggle(!visiblePassword)}
              className='absolute right-5 top-[50%] -translate-y-[50%]'
            >
              {visiblePassword ? <Eye /> : <EyeClosed />}
            </div>
          )}
        </div>
      </>
    )
  },
)

FormFailed.displayName = 'FormFailed'
