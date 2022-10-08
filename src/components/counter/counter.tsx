import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Icon } from '../icon'

const StyledContainer = styled.div`
    .placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0em;
    }
    .value {
        margin: 0px 16px;
    }
    .icon {
        font-size: 16px;
    }
`

const IconButton = styled.button`
    padding: 2px;
    background: var(--neutral-100);
    border-radius: 50%;
    border: none;
    color: var(--neutral-600);
    border: 1px solid transparent;

    &:hover,
    &:active {
        border: 1px solid var(--neutral-400);
    }

    &:active {
        color: var(--primary);
    }

    &:disabled {
        background: rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.2);
    }
`

type CounterProps = {
    onChange: (value: number) => void
    value: number
    max?: number
    min?: number
    className?: string
    placeholder?: string
    style?: React.CSSProperties
}

const Counter: React.FC<CounterProps> = ({
    onChange,
    value,
    placeholder,
    className,
    style,
    max,
    min,
}: CounterProps): ReactElement => {
    const isMax = value === max
    const isMin = value === min

    const increaseCounter = () => {
        const newValue = value + 1
        if (max) {
            if (newValue <= max) {
                onChange(newValue)
            }
        } else {
            onChange(newValue)
        }
    }

    const decreaseCounter = () => {
        const newValue = value - 1
        if (min) {
            if (newValue >= min) {
                onChange(newValue)
            }
        } else {
            onChange(newValue)
        }
    }

    return (
        <StyledContainer
            className={`d-flex align-items-center ${className} `}
            style={style}
        >
            <span className="placeholder text-left">{placeholder}</span>
            <div style={{ flex: 1 }} />
            <IconButton
                className="d-flex justify-content-center align-items-baseline"
                onClick={decreaseCounter}
                disabled={isMin}
            >
                <Icon variant="icon-less" />
            </IconButton>
            <span className="value">{value}</span>
            <IconButton
                className="d-flex justify-content-center align-items-baseline"
                onClick={increaseCounter}
                disabled={isMax}
            >
                <Icon variant="icon-add" />
            </IconButton>
        </StyledContainer>
    )
}

export default Counter
