import React from 'react'
import '../../../assets/styles/bootstrap/carousel.scss'
import styled from 'styled-components'
import { FadeCarousel } from '../carousel/Carousel'
import CarouselControls from '../carousel/CarouselControls'
import { HeroImage } from '.'

export type HeroProps = {
    interval?: number
    images: HeroImage[]
    children?: React.ReactNode
    withControls?: boolean
    onChangeSlide?: (index: number) => void
} & React.ComponentPropsWithoutRef<'div'>

const StyledCarousel = styled.div`
    :root {
        --hc-sm-height: 488;
        --hc-sm-width: 375;
        --hc-md-height: 588;
        --hc-md-width: 744;
        --hc-lg-height: 563;
        --hc-lg-width: 1128;
    }
    background-color: black;
    &.carousel-container {
        overflow: inherit !important;
        display: flex;
        align-items: stretch;
        position: relative;
        justify-content: center;
        overflow: hidden;
        height: calc(var(--hc-sm-height, 4) / var(--hc-sm-width, 3) * 100vw);
    }

    .images-container {
        z-index: 0;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }

    .carousel-content {
        position: relative;
        width: 100%;
        padding-top: 96px;
        padding-bottom: 32px;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(249, 249, 249, 0) 65%
        );
    }

    .children-content {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    @media (min-width: 744px) {
        &.carousel-container {
            height: calc(
                var(--hc-md-height, 1) / var(--hc-md-width, 1) * 100vw
            );
        }
        .carousel-content {
            padding-top: 250px;
            padding-bottom: 72px;
        }
    }
    @media (min-width: 950px) {
        &.carousel-container {
            height: max(
                550px,
                min(
                    85vh,
                    calc(
                        var(--hc-lg-height, 9) / var(--hc-lg-width, 16) * 100vw
                    )
                )
            );
        }
        .carousel-content {
            padding-top: 191px;
            padding-bottom: 45px;
        }
    }
    @media (min-width: 1128px) {
        .carousel-content {
            padding-top: 146px;
            padding-bottom: 100px;
        }
    }
`

const Hero = ({
    interval = 3500,
    images,
    children,
    withControls,
    className,
    onChangeSlide,
    ...props
}: HeroProps) => {
    const [activeIndex, setActiveIndex] = React.useState(0)
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

    return (
        <StyledCarousel className="carousel-container" {...props}>
            <div className="images-container">
                <FadeCarousel activeIndex={activeIndex} images={images} />
            </div>
            <div className="carousel-content">
                {withControls ? (
                    <CarouselControls
                        itemsLength={images.length}
                        setActiveIndex={setActiveIndex}
                        onChange={resetInterval}
                    />
                ) : null}
                {children ? (
                    <div className="children-content">{children}</div>
                ) : null}
            </div>
        </StyledCarousel>
    )
}

export default Hero
