import React from 'react'
import '../../../assets/styles/bootstrap/carousel.scss'
import { HeroImage } from '.'
export declare type HeroProps = {
    interval?: number
    images: HeroImage[]
    children?: React.ReactNode
    withControls?: boolean
    onChangeSlide?: (index: number) => void
} & React.ComponentPropsWithoutRef<'div'>
declare const Hero: ({
    interval,
    images,
    children,
    withControls,
    className,
    onChangeSlide,
    ...props
}: HeroProps) => JSX.Element
export default Hero
