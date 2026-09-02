'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { FC, PropsWithChildren } from 'react'
import { Toaster } from 'sonner'
import { client } from '@/lib/query-client'
import { TooltipProvider } from '@/components/ui/tooltip'

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      <TooltipProvider delayDuration={200}>
        <Toaster
          position='top-center'
          toastOptions={{
            duration: 2000,
            style: {
              background: '#333',
              color: '#fff',
            },
          }}
        />

        {children}
      </TooltipProvider>
    </QueryClientProvider>
  )
}

export default Providers
