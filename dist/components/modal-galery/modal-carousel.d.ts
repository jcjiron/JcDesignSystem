/// <reference types="react" />
import { ModalCenteredDialogProps } from '../modal-dialog-centered/modal-centered-dialog'
import { ModalGalleryProps } from './modal-gallery'
export declare type ModalCarouselProps = Omit<
    ModalGalleryProps,
    'openButtonLabel' | 'galleryButtonRef'
> &
    Omit<ModalCenteredDialogProps, 'children' | 'variant'>
export declare const ModalCarousel: ({
    show,
    closeModal,
    images,
    countImageOfLabel,
}: ModalCarouselProps) => JSX.Element
