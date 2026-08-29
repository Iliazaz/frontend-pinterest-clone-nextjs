'use client'

import { authService } from '@/services/endpoints/auth/auth.service'
import { IAuthLoginForm } from '@/shared/types/auth.interface'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useLogin = () => {
  const router = useRouter()
  const form = useForm<IAuthLoginForm>({
    mode: 'onChange',
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: IAuthLoginForm) => authService.login(data),
    onSuccess() {
      form.reset()
      toast.success('Вы вошли в аккаунт')
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

  const onSubmit: SubmitHandler<IAuthLoginForm> = (data) => {
    mutate(data)
  }
  return { onSubmit, mutate, isPending, form }
}
