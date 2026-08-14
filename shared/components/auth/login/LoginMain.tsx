'use client'

import React from 'react'
import { FormFailed } from '../../ui/form-failed'
import { Button } from '../../ui/button'
import Image from 'next/image'
import logo from '../../../../public/Pinterest.svg'
import { cn } from '@/shared/lib/utils'

interface LoginMainProps {
  setChangeOfForm: (changeOfForm: boolean) => void
  className?: string
}

export const LoginMain: React.FC<LoginMainProps> = ({
  className,
  setChangeOfForm,
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
      </div>

      <div className='flex flex-col gap-2 items-center justify-center w-full'>
        <FormFailed type='email' placeholder='Введите адрес эл. почты' />
        <FormFailed
          type={visiblePassword ? 'text' : 'password'}
          placeholder='Пароль'
          visiblePassword={visiblePassword}
          showPasswordToggle={setVisiblePassword}
        />
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <Button size='auth' className='hover:bg-Pinterest-red-hover cursor-pointer'>Войти</Button>

        <span
          onClick={() => setChangeOfForm(true)}
          className='text-sm hover:text-Pinterest-red-hover cursor-pointer'
        >
          Нет аккаунта? Регистрация
        </span>
      </div>
    </div>
  )
}
