import React from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export type CardCapacityProps = {
    variant?: 'dark' | 'light'
    children: string
}

const StyledCardCapacity = styled.div`
    &.dark {
        span {
            color: var(--neutral-200);
            font-size: 14px;
            font-weight: 300;
        }
    }
    &.light {
        span {
            color: var(--neutral-700);
            font-size: 14px;
            font-weight: 300;
        }
    }
`

export const CardCapacity = ({ variant, children }: CardCapacityProps) => {
    return (
        <StyledCardCapacity className={`${variant}`}>
            <span>{children}</span>
        </StyledCardCapacity>
    )
}

export default CardCapacity
