import React from 'react'
import { FormInput } from '../ui/form-input'
import { FormTextarea } from '../ui/form-textarea'
import { ToggleSwitch } from '../ui/toggle-switch'
import { Button } from '../ui/button'
import { useCreateDashBoard } from '@/hook/dashboard/useCreateDashBoard'
import { useCreatePost } from '@/hook/post/useCreatePost'

export const CreatedDashBoardMain: React.FC = () => {
  const [isChecked, setIsChecked] = React.useState<boolean>(false)

  const { isPending, onCreatedDashBoard, form } = useCreateDashBoard()

 
  return (
    <div className='flex flex-col justify-center w-full gap-6'>
      <div className='flex flex-col items-center gap-6'>
        <h2 className='font-bold text-2xl'>Создать доску</h2>

        <div className='w-56 h-42 rounded-xl bg-secondary'></div>
      </div>
      <form
        onSubmit={form.handleSubmit(onCreatedDashBoard)}
        className='flex flex-col gap-3'
      >
        <FormInput
          inEnter={true}
          placeholder='Укажите название доски'
          label='Название доски'
          type={'text'}
          {...form.register('name', {
            required: 'Название доски обязательно',
          })}
          error={form.formState.errors.name?.message || ''}
        />
        <FormTextarea
          inEnter={true}
          placeholder='Опешите вашу доску'
          label='Описание доски'
          {...form.register('description', {
            required: 'Описание доски обязательно',
          })}
          error={form.formState.errors.description?.message || ''}
        />

        <div className='flex items-center  justify-between'>
          <div className=''>
            <p className='font-bold'>Сделать эту доску частной</p>
            <span className='text-xs'>
              Доски по умолчанию являются общедоступными, и любой пользователь
              может их увидеть. Частные доски видят только соавторы.
            </span>
          </div>
          <ToggleSwitch
            className=''
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            {...form.register('isPrivate')}
          />
        </div>
        <Button disabled={isPending} type='submit' className='py-6 my-3'>
          {isPending ? 'Сохранение...' : 'Создать доску'}
        </Button>
      </form>
    </div>
  )
}
