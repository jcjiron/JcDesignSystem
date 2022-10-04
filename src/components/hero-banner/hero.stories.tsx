import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Hero from './Hero';
import { CarouselImage } from '../carousel';
import { Primary as SearchBar } from '../search-bar/search-bar.stories';

export default {
  title: 'Example/Hero',
  component: Hero,
} as Meta;

const CDN_URL = 'https://d1l56s2phyyu51.cloudfront.net';

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
];

const copy = [
  'Boutique travel apartments in Latin America.',
  'Book a Casai before february 1st and get 15% Off.',
  'Boutique travel apartments in Latin America.',
];

const HeroTemplate: Story = ({ ...args }) => {
  const [title, setTitle] = useState<string>();
  const onChangeSlide = (index: number) => {
    setTitle(copy[index]);
  };

  return (
    <Hero images={images} onChangeSlide={onChangeSlide} {...args}>
      <h1
        style={{
          width: '100%',
          textAlign: 'left',
          color: 'white',
          fontSize: 48,
        }}
      >
        {title}
      </h1>
      <SearchBar />
    </Hero>
  );
};

export const HeroBanner = HeroTemplate.bind({});

HeroBanner.args = {
  withControls: true,
  interval: 3500,
};
