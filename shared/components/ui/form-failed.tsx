import React from 'react'
import { Input } from './input'
import { Eye, EyeClosed } from 'lucide-react'

interface FormFailedProps {
  type: string
  placeholder: string
  visiblePassword?: boolean
  showPasswordToggle?: (value: boolean) => void
}

export const FormFailed: React.FC<FormFailedProps> = ({
  visiblePassword,
  placeholder,
  type,
  showPasswordToggle,
}) => {
  return (
    <>
      <div className='relative w-full'>
        <Input className='p-6' placeholder={placeholder} type={type} />

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
}
