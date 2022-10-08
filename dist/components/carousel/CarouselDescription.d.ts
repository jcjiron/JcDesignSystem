/// <reference types="react" />
import { CarouselImage } from '.'
interface CarouselDescriptionProps {
    images: CarouselImage[]
    activeIndex: number
    links: string[]
}
export declare const CarouselDescription: ({
    images,
    activeIndex,
    links,
}: CarouselDescriptionProps) => JSX.Element
export {}
