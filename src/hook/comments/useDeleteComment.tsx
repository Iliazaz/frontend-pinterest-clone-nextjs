import { commentService } from '@/services/endpoints/comments/comments.service'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useDeleteComment = () => {
  const { mutate, data, isPending } = useMutation({
    mutationKey: ['comments'],
    mutationFn: async (id: string) => {
      return await commentService.deletePostComment(id)
    },
    onSuccess: () => {
      toast.success('Комментарий отредактирован')
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

  const onDeleteComment = (id: string) => {
    mutate(id)
  }

  return { onDeleteComment, data, isPending }
}
