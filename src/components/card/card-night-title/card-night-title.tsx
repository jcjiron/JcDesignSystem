import React, { ReactNode } from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export type CardNightTitleProps = {
    variant?: 'dark' | 'light'
    children: ReactNode
}

const StyledCardNightTitle = styled.div`
    &.dark {
        span {
            color: var(--neutral-100);
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
        }
    }
    &.light {
        span {
            color: var(--primary-800);
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
        }
    }
`

export const CardNightTitle = ({ variant, children }: CardNightTitleProps) => {
    return (
        <StyledCardNightTitle className={`${variant}`}>
            <span>{children}</span>
        </StyledCardNightTitle>
    )
}

export default CardNightTitle
