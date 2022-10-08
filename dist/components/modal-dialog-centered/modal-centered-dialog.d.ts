import { ModalProps } from '../modal/index'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
export declare type ModalCenteredDialogProps = {
    closeModal?: () => void
    variant: 'dark' | 'light'
    actionBar?: ReactNode
    mergeHeaderWithContent?: boolean
} & ModalProps
export declare const ModalCenteredDialog: ({
    children,
    closeModal,
    show,
    className,
    animate,
    variant,
    actionBar,
    mergeHeaderWithContent,
}: ModalCenteredDialogProps & ComponentPropsWithoutRef<'div'>) => JSX.Element
