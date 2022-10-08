import React from 'react'
import { Image } from '../image/Image'
import styled from 'styled-components'
import { AmenityImage } from './amenities'

const AmenityContainer = styled.div`
    .card {
        border: none;
    }
    .card-body {
        padding-top: 0;
        padding-left: 0;
        padding-right: 0;
        background: white;
    }
    & .amenity-image {
        max-width: 190px;
        max-height: 190px;
        object-fit: cover;
        display: block;
        margin: 0 auto 10px auto;
        border-radius: 8px;
    }
    @media (max-width: 576px) {
        & .amenity-image {
            margin-right: 0;
            margin-left: 0;
        }

        & .image-wrapper {
            padding-right: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 992px) {
        & .amenity-image {
            max-width: 150px;
            max-height: 150px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px) {
        & .amenity-image {
            max-width: 120px;
            max-height: 120px;
        }
    }

    @media (max-width: 576px) {
        & .amenity-image {
            max-width: 120px;
            max-height: 120px;
        }
    }
`

const AmenityTitleContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 575px) {
        padding-left: 32px;
    }
`

const AmenityTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-left: 10px;
    text-align: left;
    color: var(--paragraph-color);

    @media (min-width: 576px) {
        width: 80%;
        text-align: center;
        margin: 0 auto;
    }
`

interface AmenityProps {
    image: AmenityImage
}

export const Amenity = ({
    image: { src, fallbackSrc, thumbnail, alt, amenitieTitle },
}: AmenityProps) => {
    return (
        <AmenityContainer className="col-sm-4 col-md-2">
            <div className="card">
                <div className="card-body">
                    <div className="d-none d-sm-block d-md-block">
                        <Image
                            className="amenity-image"
                            loading="lazy"
                            alt={alt}
                            src={src}
                            fallbackSrc={fallbackSrc}
                            thumbnail={thumbnail}
                        />
                        <AmenityTitleContainer>
                            <AmenityTitle>{amenitieTitle}</AmenityTitle>
                        </AmenityTitleContainer>
                    </div>
                    <div className="row d-sm-none">
                        <div className="col-3 image-wrapper">
                            <Image
                                className="amenity-image"
                                loading="lazy"
                                alt={alt}
                                src={src}
                                fallbackSrc={fallbackSrc}
                                thumbnail={thumbnail}
                            />
                        </div>
                        <AmenityTitleContainer className="col-9">
                            <AmenityTitle>{amenitieTitle}</AmenityTitle>
                        </AmenityTitleContainer>
                    </div>
                </div>
            </div>
        </AmenityContainer>
    )
}
