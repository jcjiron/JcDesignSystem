/// <reference types="react" />
import { AmenityImage } from './amenities';
interface AmenityProps {
    image: AmenityImage;
}
export declare const Amenity: ({ image: { src, fallbackSrc, thumbnail, alt, amenitieTitle }, }: AmenityProps) => JSX.Element;
export {};
