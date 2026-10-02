import { cn } from '@/lib/utils'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { ArrowUp, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

interface SelectCardProps {
  className?: string
}

export const SelectCard: React.FC<SelectCardProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'border rounded-xl w-full bg-secondary py-4 px-3 focus-within:border-Pinterest-red-hover  group',
        className,
      )}
    >
      <Popover>
        <PopoverTrigger className='w-full'>
          <div>
            <div className='flex flex-col gap-3 w-full'>
              <label
                className='text-xs  text-start text-secondary-text px-2 font-bold'
                htmlFor=''
              >
                Доска
              </label>
              <div className='flex justify-between  items-center'>
                <span className='text-md text-secondary-text px-2'>
                  Выберете доску
                </span>

                <ChevronDown className='text-secondary-text' />
              </div>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className='w-[400px]'>
          <div className=''>
            <div className='flex gap-2'>
              <Image src='' alt='' />
              <span>title</span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
