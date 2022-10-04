import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../button';
import { ScreenSize } from '../hooks/use-screen-size/use-screen-size';
import { useScreenWidth } from '../hooks/use-screen-width/use-screen-width';
import { Amenities, AmenityImage } from './amenities';

export type HomeAmenititesProps = {
  images: AmenityImage[];
  buttonLabel: string;
};
const StyledBtn = styled(Button)`
  margin: 0 auto;
  @media (min-width: 768px) {
    visibility: hidden;
  }
`;
export const HomeAmenitites = ({
  images,
  buttonLabel,
}: HomeAmenititesProps) => {
  const [filteredImages, setImages] = useState(images);
  const widthSize = useScreenWidth();
  useEffect(() => {
    if (widthSize <= ScreenSize.SMALL) {
      const temp = [...images].splice(0, 6);
      setImages(temp);
    } else {
      if (images.length !== filteredImages.length) {
        setImages(images);
      }
    }
  }, [widthSize]);
  const clickButton = () => {
    setImages(images);
  };
  return (
    <div className="row">
      <Amenities
        images={filteredImages}
        Button={
          images.length !== filteredImages.length && (
            <StyledBtn onClick={clickButton} variant="neutral" shape="square">
              {buttonLabel}
            </StyledBtn>
          )
        }
      />
    </div>
  );
};
