import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import Link from 'next/link'
import { Settings } from 'lucide-react'
import { NavigateProps } from './types/types'
import { navigate } from './constants/sidebar.constants'

export const Navigate: React.FC<NavigateProps> = ({
  className,
  handlePanelClick,
}) => {
  return (
    <div
      className={cn(
        'px-3 py-6 flex flex-col justify-between items-center border border-r-light-border',
        className,
      )}
    >
      <nav className='flex flex-col gap-8 items-center'>
        <Image src='Pinterest.svg' alt='logo' width={27} height={27} />

        {navigate.map((item) => (
          <Tooltip key={item.name}>
            <TooltipTrigger asChild>
              {item.link ? (
                <Link
                  href={item.link}
                  className='p-3 rounded-lg hover:bg-state'
                >
                  {item.icon}
                </Link>
              ) : (
                <div
                  onClick={() =>
                    setTimeout(() => handlePanelClick(item.panel), 200)
                  }
                  className='p-3 rounded-lg hover:bg-state cursor-pointer'
                >
                  {item.icon}
                </div>
              )}
            </TooltipTrigger>
            <TooltipContent className='p-3' side='right'>
              {item.name}
            </TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <Tooltip>
        <TooltipTrigger asChild>
          <div
            onClick={() => setTimeout(() => handlePanelClick('setting'), 200)}
            className='p-3 border-0 rounded-lg hover:bg-state cursor-pointer'
          >
            <Settings />
          </div>
        </TooltipTrigger>
        <TooltipContent className='p-3' side='right'>
          Настройки и поддержка
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
