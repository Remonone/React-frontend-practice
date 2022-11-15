import React, { forwardRef } from 'react'
import { IInput } from '../../types/types'

import './InputField.scss'

const InputField = forwardRef<HTMLInputElement, IInput>(({label, type}: IInput) => {
  return (
    <div className='field'>
        <input className='field-input' type={type} placeholder={label} />
    </div>
  )
})

export default InputField