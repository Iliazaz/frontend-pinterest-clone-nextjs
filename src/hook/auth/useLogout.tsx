import { authService } from '@/services/endpoints/auth/auth.service'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export const useLogout = () => {
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth'],
    mutationFn: async () => await authService.logout(),
    onSuccess: () => {
      toast.success('вы вышли из аккаунта')
      router.replace('/')
    },
    onError(error: any) {
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

  const onSubmit = () => {
    mutate()
  }

  return { isPending, onSubmit }
}
