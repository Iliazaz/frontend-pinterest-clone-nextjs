import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

interface ISearchProps {
  className?: string
}

export const SearchHeaders: React.FC<ISearchProps> = ({ className }) => {
  return (
    <div className='w-full relative flex items-center'>
      <Input className='p-6 pl-10 bg-state' placeholder={'Поиск'} />
      <Search className='absolute left-4 text-gray-400' width={17} />
    </div>
  )
}
