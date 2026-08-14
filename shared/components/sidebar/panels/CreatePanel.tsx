import { LayoutPanelLeft, Pin } from 'lucide-react'
import React from 'react'

const createdPols = [
  {
    icon: <Pin width={30} height={30} />,
    text: 'Публикуйте фотографии или видео, добавляйте ссылки, наклейки, эффекты и не только',
    title: 'Пин',
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
        <div
          key={items.title}
          className='my-5 p-2 rounded-md flex gap-3 cursor-pointer items-start hover:state'
        >
          <div className='p-4 h-16 border-0 rounded-xl flex items-center bg-state cursor-pointer'>
            {items.icon}
          </div>

          <div className=''>
            <p className='text-primary-text'>{items.title}</p>
            <span className='text-sm text-secondary-text'>{items.text}</span>
          </div>
        </div>
      ))}
    </>
  )
}
