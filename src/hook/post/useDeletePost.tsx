import { postService } from '@/services/endpoints/post/post.service'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useDeletePost = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['post'],
    mutationFn: async (postId: string) => {
      await postService.deletePost(postId)
    },
    onSuccess: () => {
      toast.success('Пин удален')
    },
    onError: (error: any) => {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error ?? error.response.data.error)
        console.log(error)
      } else {
        console.log(error)
        toast.error('Ошибка')
      }
    },
  })

  const onDeletePost = (postId: string) => {
    mutate(postId)
  }

  return { onDeletePost, isPending }
}
