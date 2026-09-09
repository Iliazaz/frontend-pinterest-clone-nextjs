import { postService } from '@/services/endpoints/post/post.service'
import { ICreatePostDto } from '@/shared/types/post.interface'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useCreatePost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['post'],
    mutationFn: async (data: ICreatePostDto) =>
      await postService.createPost(data),
    onSuccess: () => {
      toast.success('Пин создан')
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

  const onCreatePost = (data: ICreatePostDto) => {
    mutate(data)
  }

  return { isPending, onCreatePost }
}
