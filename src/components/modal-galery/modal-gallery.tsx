import React, { useState } from 'react'
import Button, { ButtonProps } from '../button/index'
import { CarouselImage } from '../carousel/CarouselContainer'
import { BannerButtonStyles } from '../collage-banner/collage-banner'
import { ModalCarousel } from './modal-carousel'

export type ModalGalleryProps = {
    images: CarouselImage[]
    openButtonLabel: React.ReactNode
    countImageOfLabel: string
    galleryButtonRef: React.Ref<HTMLButtonElement>
}

export const ModalGallery = ({
    images,
    openButtonLabel,
    countImageOfLabel,
    galleryButtonRef,
}: ModalGalleryProps) => {
    const [IsGalleryOpen, setIsGalleryOpen] = useState(false)
    const closeGallery = () => setIsGalleryOpen(false)
    const openGallery = () => setIsGalleryOpen(true)

    return (
        <>
            <Button
                onClick={openGallery}
                variant="light"
                style={BannerButtonStyles}
                refer={galleryButtonRef}
            >
                {openButtonLabel}
            </Button>
            <ModalCarousel
                images={images}
                show={IsGalleryOpen}
                closeModal={closeGallery}
                countImageOfLabel={countImageOfLabel}
            />
        </>
    )
}
