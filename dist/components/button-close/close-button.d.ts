import '../../../assets/styles/bootstrap/close-button.scss'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
export declare type CloseButtonProps = {
    children?: ReactNode
} & ComponentPropsWithoutRef<'button'>
export declare const CloseButton: ({
    children,
    className,
    ...props
}: CloseButtonProps) => JSX.Element
