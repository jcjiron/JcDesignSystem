import React from 'react'
import '../../../assets/styles/bootstrap/carousel.scss'
import styled from 'styled-components'
import { FadeCarousel } from './Carousel'
import CarouselControls from './CarouselControls'
import { SlideCarousel } from './SlideCarousel'
import { CarouselDots } from './CarouselDots'
import { CarouselDescription } from './CarouselDescription'

export type CarouselProps = {
    interval?: number
    images: CarouselImage[]
    withControls?: boolean
    withSwipe?: boolean
    withIndicators?: boolean
    onChangeSlide?: (index: number) => void
    background?: 'transparent' | 'black'
    transitionEffect?: 'fade' | 'slide'
    style?: React.CSSProperties
    className?: string
    withDescription?: boolean
    links?: string[]
}

type StyledCarouselProps = {
    background: 'transparent' | 'black'
}

const StyledCarousel = styled.div<StyledCarouselProps>`
    background-color: ${(p) => p.background};
    position: relative;
    .images-container {
        z-index: 0;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }
`

export const Carousel = ({
    interval = 3000,
    images,
    withControls,
    withSwipe = false,
    withIndicators = false,
    withDescription = false,
    links = [],
    className,
    onChangeSlide,
    background = 'transparent',
    transitionEffect: trasitionEffect = 'fade',
    ...props
}: CarouselProps) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState<number>(0)
    const [touchEnd, setTouchEnd] = React.useState<number>(0)
    const intervalId = React.useRef<ReturnType<typeof setTimeout>>()

    React.useEffect(() => {
        if (onChangeSlide) {
            onChangeSlide(activeIndex)
        }
    }, [activeIndex])

    const resetInterval = () => {
        clearInterval(intervalId.current)
        intervalId.current = setInterval(advanceSlice, interval)
    }

    const advanceSlice = React.useCallback(() => {
        setActiveIndex((prevSlide) =>
            prevSlide < images.length - 1 ? prevSlide + 1 : 0
        )
    }, [images.length])

    React.useEffect(() => {
        intervalId.current = setInterval(advanceSlice, interval)

        return () => {
            clearInterval(intervalId.current)
        }
    }, [advanceSlice, interval])

    const handleTouchStart = (evt: React.TouchEvent) => {
        if (!withSwipe) return
        evt.persist()
        setTouchStart(evt.touches[0].clientX)
    }

    const handleTouchMove = (evt: React.TouchEvent) => {
        if (!withSwipe) return
        evt.persist()
        setTouchEnd(evt.touches[0].clientX)
    }

    const handleTouchEnd = (evt: React.TouchEvent) => {
        if (!withSwipe) return
        resetInterval()
        evt.persist()
        setActiveIndex((prevState) => {
            if (touchStart < touchEnd) {
                if (prevState === 0) return images.length - 1
                return prevState - 1
            }

            if (touchStart > touchEnd) {
                if (prevState === images.length - 1) return 0
                return prevState + 1
            }
        })
    }

    const onDotsClick = (nextActive: number) => {
        resetInterval()
        setActiveIndex(nextActive)
    }

    return (
        <StyledCarousel
            className={`carousel-container ${className}`}
            {...props}
            background={background}
        >
            <div className="images-container">
                <div
                    className="carousel-container"
                    onTouchMove={handleTouchMove}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {trasitionEffect === 'slide' ? (
                        <SlideCarousel
                            activeIndex={activeIndex}
                            images={images}
                        />
                    ) : (
                        <FadeCarousel
                            activeIndex={activeIndex}
                            images={images}
                        />
                    )}
                </div>
                {withControls ? (
                    <CarouselControls
                        itemsLength={images.length}
                        setActiveIndex={setActiveIndex}
                        onChange={resetInterval}
                    />
                ) : null}
                {withDescription && (
                    <CarouselDescription
                        images={images}
                        activeIndex={activeIndex}
                        links={links}
                    />
                )}
                {withIndicators && (
                    <CarouselDots
                        activeIndex={activeIndex}
                        images={images}
                        onClick={onDotsClick}
                    />
                )}
            </div>
        </StyledCarousel>
    )
}

export interface CarouselImage {
    src: string
    fallbackSrc: string
    thumbnail?: string
    alt?: string
    description?: string
}
