import React from 'react'
import { useCollapsibleContext } from './collapsible-context'
import styled from 'styled-components'
import { Icon } from '../icon'

export type CollapsibleHeaderProps =
    React.ButtonHTMLAttributes<HTMLButtonElement>

const Container = styled.button<{ isOpen: boolean }>`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    color: inherit;

    &:active {
        color: inherit;
    }
    .dropdown-icon {
        font-size: 24px;
        transition: transform 0.25s ease-in-out;
        transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    }
`

export const CollapsibleHeader: React.FC<CollapsibleHeaderProps> = (
    props: CollapsibleHeaderProps
) => {
    const { onToggle, isOpen } = useCollapsibleContext()
    return (
        <Container
            {...props}
            type="button"
            onClick={onToggle}
            aria-expanded={isOpen}
            isOpen={isOpen}
        >
            {props.children}
            <div style={{ flex: 1 }} />
            <Icon variant="icon-Chevron-Down1" className="dropdown-icon" />
        </Container>
    )
}
