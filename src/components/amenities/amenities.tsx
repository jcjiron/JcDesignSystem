import { ReactNode } from 'react';
import { Amenity } from './amenity';

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

export const Amenities = ({
  images,
  Button,
}: AmenitiesProps) => {

  return (
    <>
      {images?.map((image: AmenityImage, index: number) => (
        <Amenity key={index} image={image} />
      ))}
      {Button}
    </>
  );
};
