import React from 'react'
import styled from 'styled-components'

const Li = styled.nav`
    font-weight: 400;
    font-size: 14px;
    line-height: 16.8px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 5px;
    padding-top: 5px;
    border-top: 5px solid var(--transparent);
    border-bottom: 5px solid var(--transparent);
    &:hover {
        border-bottom-color: var(--primary);
    }
    .nav-link {
        border-radius: 20px;
        cursor: pointer;
        .nav-link-content {
            padding-left: 6px;
        }
    }
    &.light {
        .nav-link {
            &:hover {
                background-color: var(--dark);
                border-color: var(--white);
                color: var(--white);
            }
        }
    }
    &.dark {
        .nav-link {
            &:hover {
                background-color: var(--white);
                border-color: var(--dark);
                color: var(--dark);
            }
        }
    }
    &.transparent {
        .nav-link {
            &:hover {
                background-color: var(--dark);
                border-color: var(--white);
                color: var(--white);
            }
        }
    }
`

type NavItemProps = {
    className?: string
    children?: React.ReactNode
}

export const NavItem = ({ children, className = '' }: NavItemProps) => {
    return (
        <Li className={`${className} nav-item d-flex align-items-center`}>
            {children}
        </Li>
    )
}
