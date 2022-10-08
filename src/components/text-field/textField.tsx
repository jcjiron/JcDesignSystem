import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import { IconVariant, Icon } from '../icon'

const StyledInputContainer = styled.div`
    width: 100%;
    position: relative;
    min-height: 77px;
    .input-component {
        border: 1px solid #9aa5b1;
        border-radius: 8px;
        height: 48px;
        min-width: 327px;
        background: (var(--white-bg));
        color: var(--neutral-600);
        font-size: 14px;
        font-weight: 400;

        display: flex;
        align-items: center;
        justify-content: space-between;

        &:hover,
        &:focus-within {
            border-color: #323f4b;
        }
        &:focus-within {
            span,
            input {
                color: var(--neutral-700);
            }
        }

        .inner-input {
            display: flex;
            width: 100%;
        }
        .left-icon {
            margin: 0 0 0 12px;
            font-size: 20px;
            display: flex;
            align-items: center;
        }

        input {
            outline: none;
            border: none;
            font-weight: 400;
            font-size: 16px;
            background: (var(--white-bg));
            margin: 0 12px 0 12px;
            width: 100%;
        }

        .apply-button {
            font-weight: 600;
            font-size: 16px;
            color: var(--neutral-400);
        }
    }

    .disabled-input {
        background-color: var(--neutral-100);
        border-color: #9aa5b1;
        span,
        input::placeholder {
            color: var(--neutral-400);
        }
    }

    .loading-input {
        border-color: #e4e7eb;
        span,
        input::placeholder {
            color: var(--neutral-200);
        }
        &:hover {
            border-color: #e4e7eb;
        }
    }

    .loader {
        position: absolute;
        top: 32%;
        right: 50%;
        transform: translate(50%, -50%);
        font-size: 20px;
    }
`

const StyledMessage = styled.div`
    display: flex;
    align-items: center;
    &.success {
        color: #00a527;
    }
    &.error {
        color: #e2190c;
    }
    &.default {
        color: var(--neutral-600);
    }
    span {
        font-weight: 500;
        font-size: 14px;
    }
    .message-icon {
        font-size: 20px;
    }
`

type MessageType = 'success' | 'error' | 'default' | 'defaultWithIcon'

const Message = ({
    type,
    children,
}: {
    type: MessageType
    children: React.ReactElement
}) => {
    const variantMap: Record<typeof type, IconVariant> = {
        success: 'icon-Checkmark',
        error: 'icon-Warning',
        default: null,
        defaultWithIcon: 'icon-Information',
    }

    return (
        <StyledMessage className={`mt-2 ${type}`}>
            {variantMap[type] !== null && (
                <Icon
                    className="message-icon mr-1"
                    variant={variantMap[type]}
                />
            )}
            {children}
        </StyledMessage>
    )
}

type TextFieldProps = {
    className?: string
    placeholder?: string
    isLoading?: boolean
    loader?: React.ReactNode
    value?: string
    isDisabled?: boolean
    prefixElement?: React.ReactNode
    sufixElement?: React.ReactNode
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
    messageType?: MessageType
    messageContent?: React.ReactElement
    showMessage?: boolean
} & React.HTMLProps<HTMLInputElement>

const TextField: React.FC<TextFieldProps> = ({
    placeholder,
    isLoading,
    loader,
    value,
    onChange,
    isDisabled,
    prefixElement,
    sufixElement,
    className,
    inputProps,
    messageType,
    messageContent,
    showMessage,
    ...props
}) => {
    return (
        <StyledInputContainer className={className}>
            <div
                className={classNames('input-component', {
                    'loading-input': isLoading,
                    'disabled-input': isDisabled,
                })}
            >
                <div className="inner-input">
                    {prefixElement}
                    <input
                        type="text"
                        placeholder={placeholder}
                        disabled={isLoading || isDisabled}
                        value={value}
                        onChange={onChange}
                        {...props}
                    />
                </div>
                {sufixElement}
            </div>
            {isLoading && <div className="loader">{loader}</div>}
            {showMessage && (
                <Message type={messageType}>{messageContent}</Message>
            )}
        </StyledInputContainer>
    )
}

export { TextField, TextFieldProps, MessageType }
