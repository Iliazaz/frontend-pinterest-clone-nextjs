import React from 'react'

export const Loading = () => {
  return (
    <div className='flex items-center justify-center py-6'>
      <div className='relative h-8 w-8 animate-[spin_1.2s_linear_infinite]'>
        <span className='absolute left-1/2 top-0 -translate-x-1/2'>
          <span className='block h-2.5 w-2.5 rounded-full bg-purple-600 animate-[pulse-dot_1.2s_ease-in-out_infinite]' />
        </span>

        <span className='absolute bottom-0 right-0'>
          <span className='block h-2.5 w-2.5 rounded-full bg-purple-600 animate-[pulse-dot_1.2s_ease-in-out_infinite_-0.4s]' />
        </span>

        <span className='absolute bottom-0 left-0'>
          <span className='block h-2.5 w-2.5 rounded-full bg-purple-600 animate-[pulse-dot_1.2s_ease-in-out_infinite_-0.8s]' />
        </span>
      </div>
    </div>
  )
}
