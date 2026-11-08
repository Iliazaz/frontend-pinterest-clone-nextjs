'use client'

import React from 'react'
import { FormImageUpload } from '../ui/form-image-upload'
import { FormTextarea } from '../ui/form-textarea'
import { SelectCard } from '../ui/select-card'
import { FormInput } from '../ui/form-input'
import { useGetDashBoardIsUsers } from '@/hook/dashboard/useGetDashBoardIsUsers'
import { Button } from '../ui/button'
import { CirclePlus } from 'lucide-react'
import { Modal } from '../ui/modal'
import { CreatedDashBoardMain } from '../createdDashBoard/CreatedDashBoardMain'
import { useCreatePost } from '@/hook/post/useCreatePost'
import {
  IDashBoardResponse,
  ISelectBoard,
} from '@/shared/types/dashboard.interface'

export const PinCreatedMain = () => {
  const [imageUrlData, setImageUrlData] = React.useState<File | null>(null)
  const [openModal, setOpenModal] = React.useState<boolean>()
  const [selectBoard, setSelectBoard] = React.useState<IDashBoardResponse>()
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')

  const { data, isPending } = useGetDashBoardIsUsers()
  const { onCreatePost, isPending: isCreating } = useCreatePost()

  const handleCreatePost = () => {
    if (!imageUrlData || !selectBoard) return

    onCreatePost({
      title,
      description,
      imageURL: imageUrlData,
      dashBoardId: selectBoard.id,
    })
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='grid grid-cols-2 w-[80%] justify-between gap-5 my-8 '>
        {/* Загрузка картинки */}
        <div className=''>
          <FormImageUpload setImage={setImageUrlData} className='m-9' />
        </div>
        <div className='flex flex-col gap-4'>
          <FormInput
            inEnter={!!imageUrlData}
            placeholder='Добавьте описание пину'
            type='text'
            label='Название'
            error=''
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormTextarea
            inEnter={!!imageUrlData}
            placeholder='Опишите ваш пин'
            label='Описание'
            error=''
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SelectCard
            inEnter={!!imageUrlData}
            items={data}
            setSelectBoard={setSelectBoard}
            selectBoard={selectBoard}
          />{' '}
          <Modal
            trigger={
              <Button variant='destructive' className=' flex gap-2 py-6'>
                <CirclePlus />
                Создать доску
              </Button>
            }
          >
            <CreatedDashBoardMain />
          </Modal>
          <Button
            type='button'
            onClick={handleCreatePost}
            className='hover:bg-Pinterest-red-hover flex gap-2 py-6'
          >
            <CirclePlus />
            {isCreating ? 'Создание...' : 'Создать пин'}
          </Button>
        </div>
      </div>
    </div>
  )
}
