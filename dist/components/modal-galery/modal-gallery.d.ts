import React from 'react'
import { CarouselImage } from '../carousel/CarouselContainer'
export declare type ModalGalleryProps = {
    images: CarouselImage[]
    openButtonLabel: React.ReactNode
    countImageOfLabel: string
    galleryButtonRef: React.Ref<HTMLButtonElement>
}
export declare const ModalGallery: ({
    images,
    openButtonLabel,
    countImageOfLabel,
    galleryButtonRef,
}: ModalGalleryProps) => JSX.Element
