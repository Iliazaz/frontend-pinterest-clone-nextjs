import { cn } from '@/lib/utils'
import React from 'react'

interface ToggleSwitchProps {
  label?: string
  isChecked: boolean
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  isChecked,
  label,
  setIsChecked,
  className,
  ...props
}) => {
  return (
    <label
      className={cn('flex items-center cursor-pointer select-none', className)}
    >
      <div className='relative'>
        {/* Скрытый чекбокс */}
        <input
          type='checkbox'
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          className='sr-only'
          {...props}
        />
        {/* Трек переключателя */}
        <div
          className={`block w-14 h-8 rounded-full transition-colors ${isChecked ? 'bg-Pinterest-red-hover' : 'bg-gray-300'}`}
        />
        {/* Ползунок */}
        <div
          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${isChecked ? 'transform translate-x-6' : ''}`}
        />
      </div>
      {label && <span className='ml-3 text-gray-700 font-medium'>{label}</span>}
    </label>
  )
}
