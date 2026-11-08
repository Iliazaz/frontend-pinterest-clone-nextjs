import { PinCreatedMain } from '@/components/createdPins/PinCreatedMain'
import { FormFailed } from '@/components/ui/form-failed'
import { FormImageUpload } from '@/components/ui/form-image-upload'
import { FormInput } from '@/components/ui/form-input'
import { FormTextarea } from '@/components/ui/form-textarea'
import { SelectCard } from '@/components/ui/select-card'
import React from 'react'

export default function PinCreationToolPage() {
  return (
    <div>
      {' '}
      <div>
        <hr />
        <h2 className='p-5 font-bold '>Создание пина</h2>
        <hr />
      </div>
      <PinCreatedMain />
    </div>
  )
}
