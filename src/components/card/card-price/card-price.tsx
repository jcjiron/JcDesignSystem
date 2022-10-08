import React, { ReactNode } from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export type CardPriceProps = {
    variant?: 'dark' | 'light'
    children: ReactNode
}

const StyledCardPrice = styled.div`
    &.dark {
        span {
            color: var(--neutral-100);
            font-size: 16px;
            line-height: 22px;
            font-weight: 700;
        }
    }
    &.light {
        span {
            color: var(--primary-800);
            font-size: 16px;
            line-height: 22px;
            font-weight: 700;
        }
    }
`

export const CardPrice = ({ variant, children }: CardPriceProps) => {
    return (
        <StyledCardPrice className={`${variant}`}>
            <span>{children}</span>
        </StyledCardPrice>
    )
}

export default CardPrice
