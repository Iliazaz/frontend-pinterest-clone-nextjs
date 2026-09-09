import { postService } from '@/services/endpoints/post/post.service'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useLikePost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['like'],
    mutationFn: async (postId: string) => {
      await postService.likePost(postId)
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

  const onLikePost = (postId: string) => {
    mutate(postId)
  }

  return { onLikePost, isPending }
}
