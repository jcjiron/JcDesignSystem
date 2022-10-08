import React from 'react'

import styled from 'styled-components'

export type UnitCardTitleProps = {
    title: string
    variant: 'home' | 'search' | 'pwa'
}

const StyledUnitCardTitle = styled.div`
    &.card-title-home {
        line-height: 30px;
        width: 100%;
        font-size: 20px;
        overflow: hidden;
        white-space: pre-line;
        text-align: left;
        font-weight: 500;
        color: black;
    }
    &.card-title-search {
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        color: #f8f9fa;
        text-overflow: ellipsis;
    }
    &.card-title-pwa {
        font-size: 1rem;
        max-width: 100%;
        font-weight: normal;
        line-height: 1.2;
        color: #f2f2f2;
    }
`

export const UnitCardTitle = ({ title, variant }: UnitCardTitleProps) => {
    return (
        <StyledUnitCardTitle className={`card-title-${variant}`}>
            {title}
        </StyledUnitCardTitle>
    )
}

export default UnitCardTitle
