import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from './dialog'
import { cn } from '@/lib/utils'

interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  children?: React.ReactNode
  className?: string
}

export const Modal: React.FC<ModalProps> = ({
  trigger,
  children,
  open,
  onOpenChange,
  className,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger && (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      )}

      <DialogContent className={cn('bg-white py-5 px-7  w-[700px]',className) }> 
        {children}
      </DialogContent>
    </Dialog>
  )
}