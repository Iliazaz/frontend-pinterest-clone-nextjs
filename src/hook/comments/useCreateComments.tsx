import { commentService } from '@/services/endpoints/comments/comments.service'
import {
  ICommentsData,
  ICreateCommentsResponse,
} from '@/shared/types/comments.interface'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useCreateComments = (postId: string) => {
  const form = useForm<ICommentsData>({
    mode: 'onChange',
  })
  const { mutate, isPending, data } = useMutation({
    mutationKey: ['comments'],
    mutationFn: async (data: ICommentsData) => {
      return await commentService.createComments(postId, data)
    },
    onSuccess: () => {
      form.reset()
      toast.success('Коммент оставлен')
    },
    onError: (error: any) => {
      if (
        error.response &&
        error.response.data &&
        (error.response.data.message || error.response.data.error)
      ) {
        console.log(error)
        toast.error(error)
      } else {
        console.log(error)
        toast.error('Ошибка')
      }
    },
  })

  const onCreateComments: SubmitHandler<ICommentsData> = (data) => {
    mutate(data)
  }

  return { isPending, onCreateComments, data, form }
}
