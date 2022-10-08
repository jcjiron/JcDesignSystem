/// <reference types="react" />
import { ModalCenteredDialogProps } from '../modal-dialog-centered/modal-centered-dialog'
export declare type ModalPopupProps = Pick<
    ModalCenteredDialogProps,
    | 'actionBar'
    | 'children'
    | 'closeModal'
    | 'show'
    | 'className'
    | 'mergeHeaderWithContent'
>
export declare const ModalPopup: ({
    actionBar,
    ...props
}: ModalPopupProps) => JSX.Element
