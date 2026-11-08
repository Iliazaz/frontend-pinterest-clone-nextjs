import { cn } from '@/lib/utils'
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { ArrowUp, ChevronDown, ChevronUp, X } from 'lucide-react'
import Image from 'next/image'
import {
  IDashBoardResponse,
  ISelectBoard,
} from '@/shared/types/dashboard.interface'

interface SelectCardProps {
  inEnter?: boolean
  items?: IDashBoardResponse[]
  selectBoard: IDashBoardResponse | undefined
  setSelectBoard: React.Dispatch<
    React.SetStateAction<IDashBoardResponse | undefined>
  >

  className?: string
}

export const SelectCard: React.FC<SelectCardProps> = ({
  items,
  setSelectBoard,
  inEnter,
  selectBoard,
  className,
}) => {
  return (
    <div
      className={`'relative border rounded-xl w-full py-4 px-3 ${inEnter ? 'relative bg-white   focus-within:border-Pinterest-red-hover border text-black group cursor-pointer' : 'bg-secondary  focus-within:border-Pinterest-red-hover  text-secondary-text group cursor-not-allowed'}`}
    >
      <Popover>
        <PopoverTrigger className={'w-full'}>
          {!selectBoard ? (
            <div className=''>
              <div className='flex flex-col gap-3 w-full'>
                <label className='text-xs text-start px-2 font-bold' htmlFor=''>
                  Доска
                </label>
                <div className='flex justify-between  items-center'>
                  <span className='text-md px-2'>Выберете доску</span>

                  <ChevronDown className='text-secondary-text' />
                </div>
              </div>
            </div>
          ) : (
            <div className='flex gap-2 items-center p-4 cursor-pointer border-1 rounded-lg border-gray-200'>
              <img
                className=''
                width={40}
                height={40}
                src={selectBoard.posts[0]?.imageURL}
                alt={selectBoard.posts[0]?.id}
              />
              <span>{selectBoard.name}</span>
              <X onClick={() => setSelectBoard(undefined)} color='#FFFFFF' className='absolute z-30 top-2 right-1 p-1 bg-gray-300 rounded-xl hover:opacity-70' />
            </div>
          )}
        </PopoverTrigger>
        <PopoverContent className='w-[400px] bg-white'>
          <div className=''>
            {items &&
              items.map((item) => (
                <div
                  onClick={() => setSelectBoard(item)}
                  key={item.id}
                  className='flex gap-2 items-center p-4 cursor-pointer border-y-1 hover:bg-gray-100 '
                >
                  <img
                    width={40}
                    height={40}
                    className='rounded-xs'
                    src={item.posts[0]?.imageURL}
                    alt={item.posts[0]?.id}
                  />
                  <span>{item.name}</span>
                </div>
              ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
