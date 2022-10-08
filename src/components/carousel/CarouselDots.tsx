import React from 'react'
import styled from 'styled-components'
import { CarouselImage } from './CarouselContainer'

interface CarouselDotsProps {
    activeIndex: number
    images: CarouselImage[]
    onClick: (newActive: number) => void
}

const DotsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    .carousel-dot,
    .carousel-dot-active {
        background: #c4c4c4;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }

    .carousel-dot-active {
        background: #8b8b8b;
    }
`

export const CarouselDots = ({
    activeIndex,
    images,
    onClick,
}: CarouselDotsProps) => {
    return (
        <DotsContainer className="dots-container">
            {images.map((image: CarouselImage, index: number) => {
                if (index === activeIndex)
                    return (
                        <span
                            key={index}
                            className="carousel-dot-active"
                        ></span>
                    )
                return (
                    <span
                        key={index}
                        className="carousel-dot"
                        onClick={() => onClick(index)}
                    ></span>
                )
            })}
        </DotsContainer>
    )
}
