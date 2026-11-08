import { CreatedDashBoardMain } from '@/components/createdDashBoard/CreatedDashBoardMain'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/modal'
import { createdPols } from '@/constrants/created-pols'
import { CirclePlus, LayoutPanelLeft, Pin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CreatePanel = () => {
  return (
    <>
      {createdPols.map((items) =>
        !items.link ? (
          <Modal
            trigger={
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
                    <span className='text-sm text-secondary-text'>
                      {items.text}
                    </span>
                  </div>
                </div>
              </Link>
            }
          >
            <CreatedDashBoardMain />
          </Modal>
        ) : (
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
                <span className='text-sm text-secondary-text'>
                  {items.text}
                </span>
              </div>
            </div>
          </Link>
        ),
      )}
    </>
  )
}
