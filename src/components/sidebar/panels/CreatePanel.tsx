import { LayoutPanelLeft, Pin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const createdPols = [
  {
    icon: <Pin width={30} height={30} />,
    text: 'Публикуйте фотографии или видео, добавляйте ссылки, наклейки, эффекты и не только',
    title: 'Пин',
    link: '/pin-creation-tool',
  },

  {
    icon: <LayoutPanelLeft width={30} height={30} />,
    text: 'Создайте доску, чтобы упорядочить коллекцию любимых пинов',
    title: 'Доска',
  },
]

export const CreatePanel = () => {
  return (
    <>
      {createdPols.map((items) => (
        <Link href={items.link ? items.link : ''}>
          <div
            key={items.title}
            className='my-5 p-2 rounded-md flex gap-3 cursor-pointer items-start hover:state hover:bg-secondary'
          >
            <div className='p-4 h-16 border-0 rounded-xl flex items-center bg-state cursor-pointer'>
              {items.icon}
            </div>

            <div className=''>
              <p className='text-primary-text'>{items.title}</p>
              <span className='text-sm text-secondary-text'>{items.text}</span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
