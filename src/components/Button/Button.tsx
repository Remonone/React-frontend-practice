import React, { forwardRef } from 'react'
import { IButton } from '../../types/types'

import './Button.scss'

const Button = forwardRef<HTMLButtonElement, IButton>(({variant, action, children, type}: IButton, ref) => {
  return (
    <div>
        <button ref={ref} onClick={() => action} type={type} className={'btn ' + variant}>{children}</button>
    </div>
  )
})

export default Button