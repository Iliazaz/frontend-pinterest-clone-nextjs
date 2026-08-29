'use client'

import Image from 'next/image'
import React from 'react'
import { FormFailed } from '../../ui/form-failed'
import { Button } from '../../ui/button'
import { FormAvatarRegister } from '../../ui/form-avatar-register'
import { cn } from '@/lib/utils'
import { useRegister } from '@/hook/auth/useRegister'
import { validEmail } from '@/constrants/value-email'

interface RegisterMainProps {
  setChangeOfForm: (changeOfForm: boolean) => void
  className?: string
}

export const RegisterMain: React.FC<RegisterMainProps> = ({
  setChangeOfForm,
  className,
}) => {
  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false)
  const [avatarData, setAvatarData] = React.useState<File | null>(null)

  

  const { onSubmit, form, isPending } = useRegister(avatarData)

  
  return (
    <div
      className={cn(
        'flex gap-7 flex-col text-center items-center justify-center w-[300px]',
        className,
      )}
    >
      <div className='flex flex-col gap-2 items-center'>
        <Image width={50} height={50} src='Pinterest.svg' alt='logo' />
        <h1 className='text-primary-text text-3xl font-bold '>
          Добро пожаловать в Pinterest
        </h1>
        <span className='text-secondary-text w-46'>
          Находите новые идеи и вдохновения
        </span>
      </div>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-2 items-center justify-center w-full'
      >
        <FormFailed
          type='text'
          placeholder='Придумайте никнейм'
          {...form.register('nickName')}
          error={form.formState.errors.nickName?.message}
        />
        <FormFailed
          type='email'
          placeholder='Введите адрес эл. почты'
          {...form.register('email', {
            required: 'Email обязателен',
            pattern: {
              value: validEmail,
              message: 'Неверный формат email',
            },
          })}
          error={form.formState.errors.email?.message}
        />
        <FormFailed
          type={visiblePassword ? 'text' : 'password'}
          placeholder='Пароль'
          {...form.register('password', {
            required: 'Пароль обязателен',
            minLength: {
              value: 6,
              message: 'Минимум 6 символов',
            },
          })}
          visiblePassword={visiblePassword}
          showPasswordToggle={setVisiblePassword}
          error={form.formState.errors.password?.message}
        />

        <FormAvatarRegister
          setAvatarData={setAvatarData}
          {...form.register('avatar',{})}
        />

        <div className='flex flex-col gap-2 w-full '>
          <Button
            size='auth'
            type='submit'
            className='hover:bg-Pinterest-red-hover cursor-pointer'
          >
            {isPending ? 'Вход...' : 'Зарегистрироваться'}
          </Button>

          <span
            onClick={() => setChangeOfForm(false)}
            className='text-sm hover:text-Pinterest-red-hover cursor-pointer '
          >
            Уже есть аккаунт? Войти
          </span>
        </div>
      </form>
    </div>
  )
}
