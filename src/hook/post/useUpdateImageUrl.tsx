import { postService } from '@/services/endpoints/post/post.service'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useUpdateImageUrl = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['post'],
    mutationFn: async ({
      postId,
      imageUrl,
    }: {
      postId: string
      imageUrl: File
    }) => {
      await postService.updateImageURL(postId, imageUrl)
    },
    onSuccess: () => {
      toast.success('Аватарка поменяна')
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

  const onUpdateImage = (postId: string, imageUrl: File) => {
    mutate({ postId, imageUrl })
  }

  return { isPending, onUpdateImage }
}
