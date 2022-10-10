import { ReactNode } from 'react';
export interface AmenityImage {
    src: string;
    fallbackSrc: string;
    amenitieTitle: string;
    thumbnail: string;
    alt: string;
}
export interface AmenitiesProps {
    images: AmenityImage[];
    Button: ReactNode;
}
export declare const Amenities: ({ images, Button }: AmenitiesProps) => JSX.Element;
