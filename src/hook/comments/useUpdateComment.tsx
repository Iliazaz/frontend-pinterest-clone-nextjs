import { commentService } from '@/services/endpoints/comments/comments.service'
import { IUpdateCommentsData } from '@/shared/types/comments.interface'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'

export const useUpdateComment = (id: string) => {
  const { mutate, data, isPending } = useMutation({
    mutationKey: ['comments'],
    mutationFn: async (data: IUpdateCommentsData) => {
      return await commentService.updateComment(id, data)
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

  const onUpdateComments = (data: IUpdateCommentsData) => {
    mutate(data)
  }

  return { onUpdateComments, data, isPending }
}
