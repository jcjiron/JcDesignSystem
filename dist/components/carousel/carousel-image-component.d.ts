/// <reference types="react" />
import { CarouselImage } from './CarouselContainer';
declare type CarouselImageComponentProps = {
    image: CarouselImage;
    onLoad: () => void;
    activeClass?: string;
    nextImageClass?: string;
};
export declare const CarouselImageComponent: ({ image, activeClass, nextImageClass, onLoad, }: CarouselImageComponentProps) => JSX.Element;
export {};
