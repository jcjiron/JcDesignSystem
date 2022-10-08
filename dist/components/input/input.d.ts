import React from 'react'
declare type InputProps = {
    as?: keyof JSX.IntrinsicElements
    icon?: React.ReactNode
    errorMessage?: React.ReactNode
} & React.HTMLAttributes<HTMLOrSVGElement>
declare const Input: React.FC<InputProps>
export { Input, InputProps }
