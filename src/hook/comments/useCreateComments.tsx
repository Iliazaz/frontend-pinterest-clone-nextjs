import { commentService } from '@/services/endpoints/comments/comments.service'
import { ICommentsData } from '@/shared/types/comments.interface'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useCreateComments = (parentCommentId: string) => {
  const { mutate, isPending, data } = useMutation({
    mutationKey: ['comments'],
    mutationFn: async (data: ICommentsData) => {
      return await commentService.createComments(parentCommentId, data)
    },
    onSuccess: () => {
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

  const onCreateComments = (data: ICommentsData) => {
    mutate(data)
  }

  return { isPending, onCreateComments, data }
}
