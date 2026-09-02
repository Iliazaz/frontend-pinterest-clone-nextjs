import type { Metadata } from 'next'
import { Open_Sans, Roboto_Mono } from 'next/font/google'
import '../globals.css'
import { Sidebar } from '@/components/sidebar/Sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Header } from '@/components/header/Header'
import { getAccessToken, getCurrentUser } from '@/lib/server'
import Providers from '@/lib/providers/providers'

// Основной шрифт — Open_Sans (поддерживает кириллицу)
const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
})

// Моноширинный — Roboto Mono (для кода, цифр)
const robotoMono = Roboto_Mono({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'Pinterest Clone',
  description: 'Клон pinterest написанный на express.js + Next.js',
}

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  const user = await getCurrentUser()
  return (
    <html
      lang='en'
      className={`${openSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className='min-h-full min-w-full justify-start'>
        <Providers>
          {' '}
          <Sidebar /> 
          <main className='pl-18 w-full relative flex flex-col'>
          <Header user={user} />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
