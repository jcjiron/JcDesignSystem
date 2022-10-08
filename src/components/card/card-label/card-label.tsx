import React from 'react'

import styled from 'styled-components'

/* eslint-disable-next-line */
export type CardLabelProps = {
    children: string
}

const StyledCardLabel = styled.div`
    overflow: hidden;
    .label {
        background: var(--truewhite);
        color: var(--primary);
        width: 67px;
        height: 24px;
        border-radius: 4px;
        border: 1px solid var(--neutral-200);
        align-items: center;
        justify-content: center;
        display: flex;
        font-size: 12px;
        line-height: 24px;
        font-weight: 500;
    }
`

export const CardLabel = ({ children }: CardLabelProps) => {
    return (
        <StyledCardLabel>
            <div className="label">
                <span>{children}</span>
            </div>
        </StyledCardLabel>
    )
}

export default CardLabel
