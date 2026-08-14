import { cn } from '@/shared/lib/utils'
import { X } from 'lucide-react'
import React from 'react'

interface SlidePanelProps {
  open: boolean
  setOpen: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export const SidePanel: React.FC<SlidePanelProps> = ({
  open,
  setOpen,
  title,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        `
        border overflow-hidden
        transition-all duration-500 ease-in-out
        ${
          open
            ? 'max-w-[384px] opacity-100 p-5 '
            : 'max-w-0 opacity-0 border-0 p-0 pointer-events-none'
        }
      }`,
        className,
      )}
    >
      <div className='flex items-center justify-between'>
        <p className='font-bold text-lg text-primary-text'>{title}</p>
        <div className='p-1 border-0 rounded-sm hover:bg-state cursor-pointer'>
          <X
            width={20}
            height={20}
            onClick={() => setTimeout(() => setOpen(), 200)}
          />
        </div>
      </div>

      <div className='flex-1 overflow-y-auto'>{children}</div>
    </div>
  )
}
