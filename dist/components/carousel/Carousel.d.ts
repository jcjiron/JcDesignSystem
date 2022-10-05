/// <reference types="react" />
import { CarouselImage } from '.';
export declare type FadeCarouselProps = {
    activeIndex: number;
    images: CarouselImage[];
};
export declare const Container: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const FadeCarousel: ({ images, activeIndex }: FadeCarouselProps) => JSX.Element;
