import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Icon } from '../../icon'

/* eslint-disable-next-line */
export type CardNotesProps = {
    children: ReactNode
}

const StyledCardNotes = styled.div`
    text-align: right !important;
    span {
        color: var(--neutral-500);
        font-size: 12px;
        font-weight: 500;
    }
    .icon-Information:before {
        color: var(--neutral-500);
    }
    .price-text {
        text-decoration: underline;
        margin-left: 3px;
    }
`

export const CardNotes = ({ children }: CardNotesProps) => {
    return (
        <StyledCardNotes>
            <Icon variant="icon-Information" />
            <span className="price-text">{children}</span>
        </StyledCardNotes>
    )
}

export default CardNotes
