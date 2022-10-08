import React, { useState } from 'react'

import styled from 'styled-components'
import { Icon } from '../icon'

/* eslint-disable-next-line */
export type AccordionProps = {
    children?: React.ReactNode
    title?: string
    variant?: 'dark' | 'light'
    id?: string
    content?: string
}

const StyledAccordion = styled.div`
    border-radius: 8px;
    overflow: hidden;
    &.dark {
        .tab-content,
        .tab {
            color: white;
            background: var(--dark-bg);
        }
    }
    &.light {
        .tab-content,
        .tab {
            background: var(--truewhite);
            color: black;
        }
    }
    .tab-content {
        font-size: 14px;
    }

    .tab {
        font-size: 1rem;
        &-label {
            cursor: pointer;
            .toggle-collapse {
                width: 10px;
                height: 10px;
                -webkit-transition: all 0.35s;
                transition: all 0.35s;
                font-size: 8px;
            }
        }
        &-content {
            max-height: 0;
            transition: all 0.2s;
        }
        &-close {
            display: flex;
            justify-content: flex-end;
            padding: 1rem;
            font-size: 0.75em;
            cursor: pointer;
        }
    }

    input:checked {
        + .tab-label {
            .toggle-collapse {
                transform: rotate(-180deg);
            }
        }
        ~ .tab-content {
            max-height: 100vh;
            padding: 1rem !important;
        }
    }
`

export const Accordion = ({
    children,
    title,
    variant,
    content,
    id,
}: AccordionProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const toggleOpen = () => {
        setOpen(open ? false : true)
    }

    return (
        <StyledAccordion className={`${variant} mt-4`}>
            <div className="tab overflow-hidden w-100">
                <input
                    type="checkbox"
                    onClick={toggleOpen}
                    checked={open}
                    id={id}
                    className="position-absolute d-none"
                ></input>
                <label
                    className="tab-label font-weight-light mb-0 d-flex justify-content-between p-3 font-weight-bold"
                    htmlFor={id}
                >
                    {title}
                    <Icon
                        variant="icon-Chevron-Down"
                        className="toggle-collapse text-center mt-2 mr-3"
                    />
                </label>
                <div className="tab-content px-3 py-0">
                    {content}
                    {children}
                </div>
            </div>
        </StyledAccordion>
    )
}

export default Accordion
