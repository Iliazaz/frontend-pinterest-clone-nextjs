'use client'

import React from 'react'
import { LoginMain } from './login/LoginMain'
import { RegisterMain } from './register/RegisterMain'

export const AuthMain: React.FC = () => {
  const [changeOfForm, setChangeOfForm] = React.useState<boolean>(false)

    
  return (
    <div className=' absolute top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] p-9 shadow-2xl rounded-2xl'>
      {changeOfForm ? (
        <RegisterMain setChangeOfForm={setChangeOfForm} />
      ) : (
        <LoginMain setChangeOfForm={setChangeOfForm} />
      )}
    </div>
  )
}
