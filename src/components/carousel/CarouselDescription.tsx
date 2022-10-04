import React from 'react';
import styled from 'styled-components';
import { CarouselImage } from '.';

interface CarouselDescriptionProps {
    images: CarouselImage[];
    activeIndex: number;
    links: string[];
}

const DescriptionContainer = styled.div`
    display: block;
    margin: 20px auto;
    text-align: center;
    max-width: 250px;
    font-weight: normal;

    & .see-more-link{
        display: block;
        margin-top: 5px;
    }
`;

export const CarouselDescription = ({
    images,
    activeIndex,
    links
}: CarouselDescriptionProps) => {
    
    return (
        <DescriptionContainer className="image-description">
            {images[activeIndex]?.description || ""}
            <br />
            <a href={links[activeIndex] || ""} className="see-more-link" rel="noreferrer" target="_blank">
                See more
            </a>
        </DescriptionContainer>
    )
}
