import React from "react";
import { Image } from "../image/Image";
import { CarouselImage } from "./CarouselContainer";

type CarouselImageComponentProps = {
    image: CarouselImage;
    onLoad: () => void;
    activeClass?: string;
    nextImageClass?: string;
  };
  
export const CarouselImageComponent = ({
    image,
    activeClass,
    nextImageClass,
    onLoad,
  }: CarouselImageComponentProps) => {
    return (
      <div
        key={image.src}
        className={`carousel-item h-100 ${activeClass} ${nextImageClass} `}
      >
        <Image
          className={`image d-block w-100 h-100`}
          loading="lazy"
          alt={image.alt}
          src={image.src}
          onLoad={onLoad}
          fallbackSrc={image.fallbackSrc}
          thumbnail={image.thumbnail}
        />
      </div>
    );
  };