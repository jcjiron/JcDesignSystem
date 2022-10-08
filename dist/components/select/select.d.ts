import React from 'react'
import { Option } from '.'
declare type SelectProps = {
    disabled?: boolean
    onChange?: (option: Option) => void
    selectedOption?: Option
    placeholder?: string
    options: Option[]
    variant?: 'dark' | 'light'
    fullScreen?: boolean
    className?: string
    isOpen?: boolean
    onOpenClick?: () => void
    onCloseClick?: () => void
    closeOnItemClick?: boolean
    onGoBackClick?: () => void
    buttonRef?: React.RefObject<HTMLButtonElement>
}
declare const Select: React.FC<SelectProps>
export default Select
