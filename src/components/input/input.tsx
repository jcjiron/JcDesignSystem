import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

type InputProps = {
    as?: keyof JSX.IntrinsicElements
    icon?: React.ReactNode
    errorMessage?: React.ReactNode
} & React.HTMLAttributes<HTMLOrSVGElement>

const StyledInput = styled.div<{ hasError: boolean }>`
    border: 1px solid var(--neutral-200);
    padding-left: 16px;
    padding-right: 16px;
    height: 48px;
    background: #fff;
    border-radius: 8px;

    color: var(--neutral-600);
    font-size: 14px;
    font-weight: 400;

    display: flex;
    align-items: center;

    &:hover {
        background: var(--warm-bg);
    }
    &.error {
        background: var(--warm-bg);
        border: 1px solid var(--neutral-500);
    }

    .icon-container {
        margin-right: 16px;
    }
`

const Input: React.FC<InputProps> = ({
    children,
    className = '',
    icon = '',
    as = 'button',
    errorMessage,
    ...props
}: InputProps) => {
    const hasError = !!errorMessage

    return (
        <>
            <StyledInput
                as={as}
                {...props}
                hasError={hasError}
                className={classNames(className, {
                    error: hasError,
                })}
            >
                {icon ? <span className="icon-container">{icon}</span> : null}
                {children}
            </StyledInput>
            {errorMessage ? errorMessage : null}
        </>
    )
}

export { Input, InputProps }
