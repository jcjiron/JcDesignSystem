import React from 'react'
import styled from 'styled-components'
import { SliderItem, SliderItemProps } from './slider-item'
import {
    ScrollMenu,
    Props as ScrollMenuProps,
} from 'react-horizontal-scrolling-menu'
import { LeftArrow, RightArrow } from './arrows'

const Container = styled.div`
    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .react-horizontal-scrolling-menu--scroll-container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`

type SliderComposition = {
    Item: React.FC<SliderItemProps>
}

export type SliderProps = {
    children?:
        | React.ReactElement<SliderItemProps>
        | React.ReactElement<SliderItemProps>[]
    className?: string
} & ScrollMenuProps

export const Slider: React.FC<SliderProps> & SliderComposition = ({
    children,
    className = '',
    ...scrollMenuProps
}: SliderProps) => {
    return (
        <Container className={className}>
            <ScrollMenu
                LeftArrow={LeftArrow}
                RightArrow={RightArrow}
                wrapperClassName="position-relative"
                options={{
                    ratio: 0.99,
                    rootMargin: '5px',
                    threshold: [0.01, 0.05, 0.5, 0.75, 0.95, 1],
                }}
                {...scrollMenuProps}
            >
                {children}
            </ScrollMenu>
        </Container>
    )
}

Slider.Item = SliderItem
