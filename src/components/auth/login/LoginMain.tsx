'use client'

import React from 'react'
import { FormFailed } from '../../ui/form-failed'
import { Button } from '../../ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useLogin } from '@/hook/auth/useLogin'
import { validEmail } from '@/constrants/value-email'

interface LoginMainProps {
  setChangeOfForm: (changeOfForm: boolean) => void
  className?: string
}

export const LoginMain: React.FC<LoginMainProps> = ({
  className,
  setChangeOfForm,
}) => {
  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false)

  const { isPending, onSubmit, form } = useLogin()

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
      </div>

      <div className='w-full'>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-2 items-center justify-center w-full'
        >
          <div className='flex flex-col w-full text-start'>
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
          </div>

          <div className='flex flex-col w-full text-start'>
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
          </div>
          <div className='flex flex-col gap-2 w-full mt-3'>
            <Button
              type='submit'
              disabled={isPending}
              size='auth'
              className='hover:bg-Pinterest-red-hover cursor-pointer'
            >
              {isPending ? 'Вход...' : 'Войти'}
            </Button>

            <span
              onClick={() => setChangeOfForm(true)}
              className='text-sm hover:text-Pinterest-red-hover cursor-pointer'
            >
              Нет аккаунта? Регистрация
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}
