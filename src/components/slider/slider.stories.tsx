import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Slider, SliderProps } from './'
import styled from 'styled-components'

export default {
    title: 'Example/Slider',
    component: Slider,
} as Meta

const Image = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
`

const images = [
    'https://dam.ngenespanol.com/wp-content/uploads/2019/10/perros-personalidad-2.jpg',
    'http://c.files.bbci.co.uk/48DD/production/_107435681_perro1.jpg',
    'https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg',
    'https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg',
    // 'https://www.hogarmania.com/archivos/201811/7-cosas-que-a-tu-gato-no-le-gustan-1280x720x80xX.jpg',
]

const Container = styled.div`
    .no-wrap {
        flex-wrap: nowrap;
    }
    .react-horizontal-scrolling-menu--item:first-child {
        margin-left: 15px;
    }
    .react-horizontal-scrolling-menu--item {
        margin-right: 16px;
    }
    .react-horizontal-scrolling-menu--item:last-child {
        margin-right: 0;
    }
`

const Template: Story<SliderProps> = ({ ...args }: SliderProps) => (
    <Container className="container">
        <Slider
            itemClassName="col-10 col-md-4 col-lg-3 p-0"
            scrollContainerClassName="row no-wrap"
        >
            {images.map((image) => (
                <Slider.Item key={image} itemId={image}>
                    <Image src={image} alt="Gato 1" />
                </Slider.Item>
            ))}
        </Slider>
    </Container>
)

export const Primary = Template.bind({})

Primary.args = {} as SliderProps
