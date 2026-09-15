import { dashBoardService } from '@/services/endpoints/dashboard/dashboard.service'
import { useMutation } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useDeleteDashBoard = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['dashboard'],
    mutationFn: async (id: string) => {
      return await dashBoardService.deleteDashboard(id)
    },
    onSuccess: () => {
      toast.success('Доска устпешно удалена')
    },
    onError: (error: any) => {
      if ((error.response && error.response.data) || error.response.error) {
        console.log(error)
      } else {
        console.log(error)
        toast.error('Ошибка')
      }
    },
  })

  const onDelete = (id: string) => {
    mutate(id)
  }

  return { isPending, onDelete }
}
