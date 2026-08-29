'use client'

import { authService } from '@/services/endpoints/auth/auth.service'
import { IAuthRegisterForm } from '@/shared/types/auth.interface'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export const useRegister = (avatarData: File | null) => {
  const router = useRouter()
  const form = useForm<IAuthRegisterForm>({
    mode: 'onChange',
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['auth'],
    mutationFn: async (
      data: IAuthRegisterForm & { avatarData?: File | null },
    ) => await authService.register(data),
    onSuccess: () => {
      form.reset()
      toast.success('Вы успешно зарегистрировались')
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

  const onSubmit: SubmitHandler<IAuthRegisterForm> = (data) => {
    mutate({
      email: data.email,
      password: data.password,
      nickName: data.nickName,
      avatar: avatarData ? avatarData : data.avatar,
    })
  }

  return { onSubmit, form, isPending }
}
