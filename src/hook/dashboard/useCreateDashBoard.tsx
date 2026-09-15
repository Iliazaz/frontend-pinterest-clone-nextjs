import { dashBoardService } from '@/services/endpoints/dashboard/dashboard.service'
import { ICreateDashBoard } from '@/shared/types/dashboard.interface'
import { useMutation, useQuery } from '@tanstack/react-query'
import React from 'react'
import { toast } from 'sonner'

export const useCreateDashBoard = () => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['dashboard'],
    mutationFn: async (data: ICreateDashBoard) => {
      return await dashBoardService.createDashBoard(data)
    },

    onSuccess: () => {
      toast.success('Доска создана')
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

  const onCreatedDashBoard = (data: ICreateDashBoard) => {
    mutate(data)
  }

  return { onCreatedDashBoard, isPending }
}
