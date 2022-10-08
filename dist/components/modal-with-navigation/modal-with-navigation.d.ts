import { ReactElement } from 'react'
import { IconProps } from '../icon'
import { ModalProps } from '../modal'
export declare type ModalWithNavigationProps = {
    onGoBack?: () => void
    onClose?: () => void
    title?: string
    GoBackIcon?: ReactElement<IconProps>
    CloseIcon?: ReactElement<IconProps>
    variant?: 'dark' | 'light'
} & ModalProps
export declare const ModalWithNavigation: ({
    show,
    animate,
    children,
    onClose,
    title,
    onGoBack,
    GoBackIcon,
    CloseIcon,
    variant,
    ...modalProps
}: ModalWithNavigationProps) => JSX.Element
