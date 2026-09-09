import { saveService } from '@/services/endpoints/save/save.serive'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useSavePost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['save'],
    mutationFn: async (postId: string) => {
      await saveService.savePost(postId)
    },
    onSuccess: () => {
      toast.success('Пин добавлен в сохраненные')
    },
    onError: (error: any) => {
      if (
        error.response &&
        error.response.data &&
        (error.response.data.error || error.response.data.message)
      ) {
        toast.error(
          error.response.data.error
            ? error.response.data.error
            : error.response.data.message,
        )
      } else {
        console.log(error)
        toast.error('Ошибка')
      }
    },
  })

  const onSavePin = (postId: string) => {
    mutate(postId)
  }

  return { onSavePin, isPending }
}
