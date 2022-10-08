import React from 'react'
import styled from 'styled-components'
import { Icon } from '../icon'

type ControlButtonProps = {
    onClick: (e: React.SyntheticEvent) => void
    children?: React.ReactNode
    className?: string
}

const StyledButton = styled.button`
    outline: none;
    border: none;
    background: transparent;

    .carousel-control-container {
        background: #0000005e;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const ControlButton: React.FC<ControlButtonProps> = ({
    onClick,
    children,
    className,
}: ControlButtonProps) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            <div className="carousel-control-container">{children}</div>
        </StyledButton>
    )
}

type CarouselControlsProps = {
    onChange?: () => void
    itemsLength: number
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
    onChange,
    itemsLength,
    setActiveIndex,
}: CarouselControlsProps) => {
    const movePrevSlide = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setActiveIndex((activeIndex) =>
            activeIndex > 0 ? activeIndex - 1 : itemsLength - 1
        )
        if (onChange) {
            onChange()
        }
    }

    const moveNextSlide = (e: React.SyntheticEvent) => {
        e.preventDefault()
        setActiveIndex((activeIndex) =>
            activeIndex < itemsLength - 1 ? activeIndex + 1 : 0
        )
        if (onChange) {
            onChange()
        }
    }

    return (
        <>
            <ControlButton
                className="carousel-control-prev"
                onClick={movePrevSlide}
            >
                <Icon variant="icon-Chevron-Left" />
                <span className="sr-only">Previous</span>
            </ControlButton>
            <ControlButton
                className="carousel-control-next"
                onClick={moveNextSlide}
            >
                <Icon variant="icon-Chevron-Right" />
                <span className="sr-only">Next</span>
            </ControlButton>
        </>
    )
}

export default CarouselControls
