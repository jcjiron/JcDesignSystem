import React from 'react';
import styled from 'styled-components';
import { CarouselImage } from '.';
import { CarouselImageComponent } from './carousel-image-component';

export type FadeCarouselProps = {
  activeIndex: number;
  images: CarouselImage[];
};

export const Container = styled.div`
  .image {
    object-fit: cover;
    vertical-align: bottom;
  }
`;

export const FadeCarousel = ({ images, activeIndex }: FadeCarouselProps) => {
  const [isFirstImageLoaded, setIsFirstImageLoaded] = React.useState(false);
  return (
    <Container
      className="carousel slide carousel-fade h-100"
      data-ride="carousel"
    >
      <div className="carousel-inner h-100">
        {images.map((image, index) => {
          const isActive = activeIndex === index;
          const isNextImage =
            activeIndex === images.length - 1 || activeIndex + 1 === index;
          const shouldLoad = isActive || (isNextImage && isFirstImageLoaded);

          return (
            <CarouselImageComponent
              key={image.src}
              image={image}
              activeClass={`${isActive ? 'active' : ''}`}
              nextImageClass={shouldLoad ? 'd-block' : 'd-none'}
              onLoad={() => {
                const isFirstImage = index === 0;
                if (isFirstImage && !isFirstImageLoaded) {
                  setIsFirstImageLoaded(true);
                }
              }}
            />
          );
        })}
      </div>
    </Container>
  );
};

