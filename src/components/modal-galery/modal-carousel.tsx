import {
    ModalCenteredDialog,
    ModalCenteredDialogProps,
} from '../modal-dialog-centered/modal-centered-dialog'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Carousel } from '../carousel/CarouselContainer'
import { ModalGalleryProps } from './modal-gallery'
import Button from '../button/index'
import { Icon } from '../icon/index'

const StyledModal = styled(ModalCenteredDialog)`
    .modal-body {
        position: relative;
    }
    .modal-header {
        display: none;
    }
    .label-container {
        font-size: 18px;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.8);
        border-radius: 10px;
        left: 16px;
        top: 16px;
    }

    .close.position-absolute {
        display: none;
    }
    .close-button {
        width: 36px !important;
        height: 36px !important;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.8);
        border-color: rgba(0, 0, 0, 0.8);
    }
    .modal-backdrop.show {
        opacity: 0.8 !important;
    }
    .close-button-container {
        z-index: 2;
        top: -16px;
        right: -16px;
    }
`

const StyledCarousel = styled(Carousel)`
    .h-100 {
        height: inherit !important;
        max-height: 75vh !important;
    }
    .carousel-control-next,
    .carousel-control-prev {
        opacity: 1;
        color: #c4c4c4;
    }
    .carousel-control-container {
        background-color: #fff;
        font-size: 16px;
        min-width: 32px;
        height: 32px;
    }
    .images-container {
        display: contents;
    }
    @media (min-width: 769px) {
        .carousel-control-container {
            min-width: 44px;
            height: 44px;
        }
    }
    @media (max-height: calc((85vw/4) * 3 )) {
        .h-100 {
            min-height: 45vh !important;
        }
    }
`

export type ModalCarouselProps = Omit<
    ModalGalleryProps,
    'openButtonLabel' | 'galleryButtonRef'
> &
    Omit<ModalCenteredDialogProps, 'children' | 'variant'>

export const ModalCarousel = ({
    show,
    closeModal,
    images,
    countImageOfLabel,
}: ModalCarouselProps) => {
    const [label, setLabel] = useState(
        <label className="mb-0">
            <strong>1</strong> of <strong>{images.length}</strong>
        </label>
    )
    const indexLabel = (index) => {
        const currImage = index + 1
        setLabel(
            <label className="mb-0">
                <strong>{currImage}</strong> {countImageOfLabel}{' '}
                <strong>{images.length}</strong>
            </label>
        )
    }
    return (
        <StyledModal
            show={show}
            closeModal={closeModal}
            variant={'dark'}
            mergeHeaderWithContent={true}
            className="container"
        >
            <div className="label-container position-absolute py-2 px-3">
                {label}
            </div>
            <div className="close-button-container position-absolute">
                <Button
                    shape="circle"
                    variant="light"
                    icon={<Icon variant="icon-close" />}
                    onClick={closeModal}
                    className="close-button"
                />
            </div>
            <StyledCarousel
                onChangeSlide={indexLabel}
                background="transparent"
                images={images}
                withControls={true}
                interval={5000}
                transitionEffect="fade"
            />
        </StyledModal>
    )
}
