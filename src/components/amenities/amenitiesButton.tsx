import React, { FC } from 'react';
import styled from 'styled-components';

interface AmenitiesButtonProps {
    textButton: string;
    onClick: () => void;
}

const AmenityButton = styled.button`
    outline: 0 !important;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: white;
    padding: 10px 40px;
    font-size: 15px;
    display: block;
    margin: 0 auto;

    @media (min-width: 768px){
        display: none;
    }
`;

export const AmenitiesButton: FC<AmenitiesButtonProps> = ({
    textButton,
    onClick
}) => {
    return (
        <AmenityButton onClick={onClick}>
            {textButton}
        </AmenityButton>
    )
}