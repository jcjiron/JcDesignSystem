import React, { useRef } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CarouselImage } from '../carousel'
import { ModalGallery, ModalGalleryProps } from './modal-gallery'

export default {
    title: 'Example/Gallery',
    component: ModalGallery,
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

const Template: Story = ({ ...args }: ModalGalleryProps) => {
    const modalButton = useRef<HTMLButtonElement>()
    const openGallery = () => {
        modalButton.current.click()
    }
    return (
        <>
            <button onClick={openGallery}>External Button</button>
            <ModalGallery {...args} galleryButtonRef={modalButton} />
        </>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    images: images,
    openButtonLabel: 'click to open',
    countImageOfLabel: ' in ',
}
