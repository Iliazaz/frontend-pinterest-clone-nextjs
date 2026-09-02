import React from 'react'
import { PinCard } from './PinCard'

export const PinBoard: React.FC = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      <PinCard />
    </div>
  )
}
