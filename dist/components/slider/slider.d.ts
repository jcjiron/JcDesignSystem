import React from 'react'
import { SliderItemProps } from './slider-item'
import { Props as ScrollMenuProps } from 'react-horizontal-scrolling-menu'
declare type SliderComposition = {
    Item: React.FC<SliderItemProps>
}
export declare type SliderProps = {
    children?:
        | React.ReactElement<SliderItemProps>
        | React.ReactElement<SliderItemProps>[]
    className?: string
} & ScrollMenuProps
export declare const Slider: React.FC<SliderProps> & SliderComposition
export {}
