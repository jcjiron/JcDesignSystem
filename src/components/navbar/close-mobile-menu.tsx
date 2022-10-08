import React, { ComponentPropsWithoutRef, useEffect } from 'react'
import styled from 'styled-components'
import { preventScrollOnBody } from '../modal'

const StyledButton = styled.div`
    min-height: 8px !important;
    padding: 0;
    &.dropdown-item:hover,
    .dropdown-item:focus {
        color: #16181b;
        text-decoration: none;
        background-color: inherit;
    }
    .navbar-toggler {
        border: none;
        width: 35px;
        height: 35px;
        transform: scale(0.7);
        font-size: 26px;
        &:focus {
            outline: 0;
        }
        .bar-menu {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            border-radius: 2px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            &:nth-child(1) {
                top: -3px;
            }
            &:nth-child(2),
            &:nth-child(3) {
                top: 13px;
            }
            &:nth-child(4) {
                top: 30px;
            }
        }
        &.open {
            width: 25px;
            height: 25px;
            .bar-menu {
                background: var(--black) !important;
                &:nth-child(1) {
                    top: 18px;
                    width: 0%;
                    left: 50%;
                }
                &:nth-child(2) {
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
                &:nth-child(3) {
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                }
                &:nth-child(4) {
                    top: 18px;
                    width: 0%;
                    left: 50%;
                }
            }
        }
    }
`

export const MobileMenuButton = ({
    isMenuOpen,
    clickHandler,
    className,
}: {
    clickHandler?: () => void
    isMenuOpen: boolean
} & ComponentPropsWithoutRef<'div'>) => {
    useEffect(() => {
        preventScrollOnBody({
            show: isMenuOpen,
            pageBody: document.querySelector('body'),
            modalContainer: document.querySelector('.root-portal'),
        })
    }, [isMenuOpen])

    return (
        <StyledButton
            className={`${className} justify-content-end ${
                isMenuOpen ? 'pr-4' : ''
            }`}
        >
            <button
                className={`navbar-toggler ${isMenuOpen ? 'open' : ''}`}
                onClick={clickHandler}
                type="button"
                data-toggle="collapse"
                data-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="bar-menu"></span>
                <span className="bar-menu"></span>
                <span className="bar-menu"></span>
                <span className="bar-menu"></span>
            </button>
        </StyledButton>
    )
}
