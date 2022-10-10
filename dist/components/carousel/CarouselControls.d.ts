import React from 'react';
declare type CarouselControlsProps = {
    onChange?: () => void;
    itemsLength: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};
declare const CarouselControls: React.FC<CarouselControlsProps>;
export default CarouselControls;
