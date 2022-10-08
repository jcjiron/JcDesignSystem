import { ComponentPropsWithRef, ReactNode } from 'react'
import '../../../assets/styles/bootstrap/alerts.scss'
export declare type AlertProps = {
    variant:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'danger'
        | 'warning'
        | 'info'
        | 'light'
        | 'dark'
        | 'custom'
    children: ReactNode
    isDismissable?: boolean
    handleDismiss?: () => void
    isDismissed?: boolean
    backgroundColor?: string
} & ComponentPropsWithRef<'div'>
export declare const StatefulAlert: ({
    children,
    variant,
    handleDismiss,
    isDismissed,
    isDismissable,
    className,
    backgroundColor,
    ...props
}: AlertProps) => JSX.Element
export declare const Alert: ({ ...props }: AlertProps) => JSX.Element
