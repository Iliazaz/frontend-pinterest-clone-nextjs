import React from 'react'
import { Button } from '../../ui/button'
import { Input } from '../../ui/input'
import { cn } from '@/lib/utils'
import { useCreateComments } from '@/hook/comments/useCreateComments'

interface FormReliesCommentProps {
  commentsId: string
  postId: string
  openInput: boolean
  setOpenInput: React.Dispatch<React.SetStateAction<boolean>>
  className?: string
}

export const FormReliesComment: React.FC<FormReliesCommentProps> = ({
  commentsId,
  postId,
  openInput,
  setOpenInput,
  className,
}) => {
  const [valueInput, setValueInput] = React.useState<string>()
  const { form, data, isPending, onCreateComments } = useCreateComments(postId)

  const handleSubmit = form.handleSubmit((data) => {
    onCreateComments({ text: data.text, parentCommentId: commentsId })
    setOpenInput(false)
  })
  return (
    <form
      onSubmit={handleSubmit}
      className={cn('flex flex-col gap-2 mt-2', className)}
    >
      <Input
        {...form.register('text')}
        className='p-6 border border-secondary'
        placeholder='Ответить'
        disabled={isPending}
      />
      <div className='flex justify-end'>
        <div className='flex gap-3 justify-between items-center '>
          <Button
            type='button'
            onClick={() => {
              setOpenInput(false)
              form.reset()
            }}
            className='bg-secondary text-black'
          >
            Отмена
          </Button>
          <Button
            type='submit'
            disabled={isPending || !form.watch('text')?.trim()}
            className={cn(
              'bg-secondary text-gray-300',
              isPending || !form.watch('text')?.trim()
                ? 'cursor-not-allowed opacity-50'
                : 'cursor-pointer text-white bg-pinterest-red',
            )}
          >
            {isPending ? 'Сохранение...' : 'Сохранить'}
          </Button>
        </div>
      </div>
    </form>
  )
}
