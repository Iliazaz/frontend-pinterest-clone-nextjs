import { postService } from '@/services/endpoints/post/post.service'
import { IUploadPostTextDto } from '@/shared/types/post.interface'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useUploadsPostTest = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['post'],
    mutationFn: async ({
      postId,
      data,
    }: {
      postId: string
      data: IUploadPostTextDto
    }) => await postService.uploadsPostText(postId, data),
    onSuccess: () => {
      toast.success('Пин изменен')
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
        console.log(error)
      } else {
        console.log(error)
        toast.error('Ошибка')
      }
    },
  })

  const onUpdatePostTest = (postId: string, data: IUploadPostTextDto) => {
    mutate({postId, data})
  }

  return {isPending, onUpdatePostTest}
}
