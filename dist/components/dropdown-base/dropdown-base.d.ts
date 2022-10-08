import React from 'react'
export declare type Option = {
    name: string | number
    value: string | number
}
export declare type DropdownBaseProps = {
    placeholder?: string | number
    disabled?: boolean
    variant?: 'dark' | 'light'
    fullScreen?: boolean
    className?: string
    children?: React.ReactNode
    isOpen?: boolean
    animate?: boolean
    onOpenClick?: () => void
    onCloseClick?: () => void
    onGoBackClick?: () => void
    buttonRef?: React.RefObject<HTMLButtonElement>
}
export declare const DropdownBase: React.FC<DropdownBaseProps>
