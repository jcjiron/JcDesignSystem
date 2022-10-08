import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Card from './card'
import { CarouselImage } from '../carousel'
import { Primary as SearchBar } from '../search-bar/search-bar.stories'

export default {
    title: 'Example/Card',
    component: Card,
} as Meta

const CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net'

const images: CarouselImage[] = [
    {
        src: `${CDN_URL}/img/hero-1.webp`,
        fallbackSrc: `${CDN_URL}/img/hero-1.jpg`,
        thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    },
    {
        src: `${CDN_URL}/img/hero-2.webp`,
        fallbackSrc: `${CDN_URL}/img/hero-2.jpg`,
        thumbnail: `${CDN_URL}/img/thumbnail/hero-2.webp`,
    },
    {
        src: `${CDN_URL}/img/hero-3.webp`,
        fallbackSrc: `${CDN_URL}/img/hero-3.jpg`,
        thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    },
]

const copy = [
    'Boutique travel apartments in Latin America.',
    'Book a Casai before february 1st and get 15% Off.',
    'Boutique travel apartments in Latin America.',
]

const Template: Story = ({ ...args }) => {
    const [title, setTitle] = useState<string>()
    const onChangeSlide = (index: number) => {
        setTitle(copy[index])
    }

    return <Card images={images} onChangeSlide={onChangeSlide} {...args}></Card>
}

export const Dark = Template.bind({})
export const Light = Template.bind({})

Dark.args = {
    withControls: true,
    interval: 3500,
    variant: 'dark',
    moreOptions: '+ days',
    texts: {
        // label: 'Label',
        //dates: 'May 07 - May 17',
        //moreOptions: '+ days',
        price: '$80.00 USD',
        capacity: '4 People  |  2 Bedroom  |  2 Bath',
        title: 'Serpiente Sunny Hideaway',
        location: 'Polanco, Mexico City',
        night: '/night',
    },
}

Light.args = {
    withControls: true,
    interval: 3500,
    variant: 'light',
    texts: {
        // label: 'Label',
        dates: 'May 07 - May 17',
        price: '$80.00 USD',
        capacity: '4 People  |  2 Bedroom  |  2 Bath',
        title: 'Serpiente Sunny Hideaway',
        location: 'Polanco, Mexico City',
        night: '/night',
    },
}
