'use client'

import Image from 'next/image'
import React from 'react'
import { FormFailed } from '../../ui/form-failed'
import { Button } from '../../ui/button'
import logo from '../../../../public/Pinterest.svg'
import { FormAvatarRegister } from '../../ui/form-avatar-register'
import { cn } from '@/shared/lib/utils'

interface RegisterMainProps {
  setChangeOfForm: (changeOfForm: boolean) => void
  className?: string
}

export const RegisterMain: React.FC<RegisterMainProps> = ({
  setChangeOfForm,
  className,
}) => {
  const [visiblePassword, setVisiblePassword] = React.useState<boolean>(false)

  return (
    <div
      className={cn(
        'flex gap-7 flex-col text-center items-center justify-center w-[300px]',
        className,
      )}
    >
      <div className='flex flex-col gap-2 items-center'>
        <Image width={50} height={50} src={logo} alt='logo' />
        <h1 className='text-primary-text text-3xl font-bold '>
          Добро пожаловать в Pinterest
        </h1>
        <span className='text-secondary-text w-46'>
          Находите новые идеи и вдохновения
        </span>
      </div>

      <div className='flex flex-col gap-2 items-center justify-center w-full'>
        <FormFailed type='text' placeholder='Придумайте никнейм' />
        <FormFailed type='email' placeholder='Введите адрес эл. почты' />
        <FormFailed
          type={visiblePassword ? 'text' : 'password'}
          placeholder='Пароль'
          visiblePassword={visiblePassword}
          showPasswordToggle={setVisiblePassword}
        />

        <FormAvatarRegister />
      </div>

      <div className='flex flex-col gap-2 w-full '>
        <Button size='auth' className='hover:bg-Pinterest-red-hover cursor-pointer'>Зарегистрироваться</Button>

        <span
          onClick={() => setChangeOfForm(false)}
          className='text-sm hover:text-Pinterest-red-hover cursor-pointer '
        >
          Уже есть аккаунт? Войти
        </span>
      </div>
    </div>
  )
}
