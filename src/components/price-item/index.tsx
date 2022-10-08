import React from 'react'

import styled from 'styled-components'

export type UnitCardPriceItemProps = {
    orientation?: 'horizontal' | 'vertical'
    stagingTitle: string
    pricePerNight: number
    priceTitle: string
}

const StyledPriceItem = styled.div`
    .starting-title {
        text-transform: uppercase;
        color: #6c757d;
    }
    .price-tag {
        color: #f2f2f2;
    }
    &.horizontal {
        display: flex;
        flex-direction: row;
        .starting-title {
            flex-grow: 1;
            font-size: 0.57rem;
        }
        .price-tag {
            flex-grow: 1;
            margin-left: auto;
            text-align: right;
            font-size: 0.93rem;
            font-weight: bold;
        }
    }
    &.vertical {
        .starting-title {
            margin: 0px;
            font-size: 10px;
            font-weight: 700;
            text-align: left;
            text-align: right;
        }
        .price-tag {
            line-height: 14px;
            font-size: 14px;
            position: relative;
            text-align: right;
        }
    }
`

export const UnitCardPriceItem = ({
    orientation = 'horizontal',
    stagingTitle,
    pricePerNight,
    priceTitle,
}: UnitCardPriceItemProps) => {
    return (
        <StyledPriceItem className={`${orientation}`}>
            <h4 className="starting-title">{stagingTitle}</h4>
            <div className="price-tag">
                ${pricePerNight}
                <span className="night-title">/{priceTitle}</span>
            </div>
        </StyledPriceItem>
    )
}

export default { UnitCardPriceItem }
