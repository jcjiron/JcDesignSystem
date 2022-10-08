import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { CarouselImage, CarouselProps, Carousel } from './index'

export default {
    title: 'Example/Carousel',
    component: Carousel,
} as Meta

const CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net'

const images: CarouselImage[] = [
    {
        src: `${CDN_URL}/img/hero-1.webp`,
        fallbackSrc: `${CDN_URL}/img/hero-1.jpg`,
        thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
        description: `"With travel and tourism rising across Latin America..."`,
    },
    {
        src: `${CDN_URL}/img/hero-2.webp`,
        fallbackSrc: `${CDN_URL}/img/hero-2.jpg`,
        thumbnail: `${CDN_URL}/img/thumbnail/hero-2.webp`,
        description: `"The company´s fundraise - the largest in Mexico..."`,
    },
    {
        src: `${CDN_URL}/img/hero-3.webp`,
        fallbackSrc: `${CDN_URL}/img/hero-3.jpg`,
        thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
        description: `"Casai startup mexicana de hospitalidad, anuncia..."`,
    },
]

const links: Array<string> = [
    'https://casai.com/',
    'https://casai.com/',
    'https://casai.com/',
]

const Template: Story<CarouselProps> = ({ ...args }: CarouselProps) => (
    <Carousel
        style={{
            width: '375px',
            height: '300px',
        }}
        images={images}
        {...args}
    ></Carousel>
)

export const Primary = Template.bind({})

Primary.args = {
    withControls: true,
    interval: 2000,
    transitionEffect: 'fade',
    links: links,
} as CarouselProps
