import React from 'react'
import '../../../assets/styles/bootstrap/carousel.scss'
export declare type CarouselProps = {
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
export declare const Carousel: ({
    interval,
    images,
    withControls,
    withSwipe,
    withIndicators,
    withDescription,
    links,
    className,
    onChangeSlide,
    background,
    transitionEffect,
    ...props
}: CarouselProps) => JSX.Element
export interface CarouselImage {
    src: string
    fallbackSrc: string
    thumbnail?: string
    alt?: string
    description?: string
}
