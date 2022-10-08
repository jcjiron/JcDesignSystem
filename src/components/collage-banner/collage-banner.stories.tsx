import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CollageBanner } from './collage-banner'
import { Image } from './../image/Image'
import Button from '../button'

export default {
    title: 'Example/Collage Banner',
    component: CollageBanner,
} as Meta

const CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net'

const images = [
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

const Template: Story = ({ images }) => (
    <CollageBanner images={images}>
        <Button> button 1 </Button>
        <Button> button 2 </Button>
    </CollageBanner>
)

export const Primary = Template.bind({})
Primary.args = {
    images: [
        <Image
            src={images[0].src}
            fallbackSrc={images[0].fallbackSrc}
            thumbnail={images[0].thumbnail}
        />,
        <Image
            src={images[1].src}
            fallbackSrc={images[1].fallbackSrc}
            thumbnail={images[1].thumbnail}
        />,
        <Image
            src={images[2].src}
            fallbackSrc={images[2].fallbackSrc}
            thumbnail={images[2].thumbnail}
        />,
        <Image
            src={images[3].src}
            fallbackSrc={images[3].fallbackSrc}
            thumbnail={images[3].thumbnail}
        />,
        <Image
            src={images[4].src}
            fallbackSrc={images[4].fallbackSrc}
            thumbnail={images[4].thumbnail}
        />,
    ],
}
