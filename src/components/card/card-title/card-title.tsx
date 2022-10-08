import React, { ReactNode } from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export type CardTitleProps = {
    variant?: 'dark' | 'light'
    children: ReactNode
}

const StyledCardTitle = styled.div`
    &.dark {
        span {
            color: var(--neutral-100);
            font-size: 16px;
            line-height: 22px;
            font-weight: 500;
        }
    }
    &.light {
        span {
            color: var(--primary-800);
            font-size: 16px;
            line-height: 22px;
            font-weight: 500;
        }
    }
`

export const CardTitle = ({ variant, children }: CardTitleProps) => {
    return (
        <StyledCardTitle className={`${variant}`}>
            <span>{children}</span>
        </StyledCardTitle>
    )
}

export default CardTitle
