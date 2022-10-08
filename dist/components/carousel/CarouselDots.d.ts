/// <reference types="react" />
import { CarouselImage } from './CarouselContainer'
interface CarouselDotsProps {
    activeIndex: number
    images: CarouselImage[]
    onClick: (newActive: number) => void
}
export declare const CarouselDots: ({
    activeIndex,
    images,
    onClick,
}: CarouselDotsProps) => JSX.Element
export {}
