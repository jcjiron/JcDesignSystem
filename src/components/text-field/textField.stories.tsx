import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TextField, TextFieldProps } from '.'
import styled from 'styled-components'
import { Icon } from '../icon'
import Button from '../button'

export default {
    title: 'inputs/Generic Input',
    component: Icon,
} as Meta

const placeholder = 'Promo Code'
const buttonText = 'Apply'
const defaultMessageType = 'default'
const defaultMessage = 'this is an example message'
const iconVariant = 'icon-Promo-code'

const Container = styled.div`
    background: var(--white-bg);
    box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),
        0px 2px 4px rgba(18, 21, 27, 0.15);
    border-radius: 8px;
    width: min-content;
    padding: 24px;
`

const StyledButton = styled(Button)`
    &.btn[type='submit'] {
        min-width: auto;
    }
`

export const Default: Story = (args: TextFieldProps) => {
    const [currentValue, setCurrentValue] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.target.value)
    }

    return (
        <Container>
            <TextField {...args} value={currentValue} onChange={onChange} />
        </Container>
    )
}

Default.args = {
    placeholder: placeholder,
} as TextFieldProps

export const DefaultWithMessage: Story = (args: TextFieldProps) => {
    const [currentValue, setCurrentValue] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(e.target.value)
    }
    return (
        <Container>
            <TextField
                {...args}
                value={currentValue}
                onChange={onChange}
                messageContent={<span>{defaultMessage}</span>}
                messageType={defaultMessageType}
                showMessage={true}
                prefixElement={
                    <Icon className="left-icon" variant={iconVariant}></Icon>
                }
                sufixElement={
                    <StyledButton
                        className="mx-3 apply-button"
                        variant="transparent"
                        disabled={!currentValue.trim()}
                        type="submit"
                    >
                        {buttonText}
                    </StyledButton>
                }
            />
        </Container>
    )
}

DefaultWithMessage.args = {
    placeholder: placeholder,
} as TextFieldProps

export const WithSuccessMessage: Story = (args: TextFieldProps) => {
    const [currentValue, setCurrentValue] = useState('')

    const onChange = (e) => {
        setCurrentValue(e.target.value)
    }

    return (
        <Container>
            <TextField
                {...args}
                messageContent={<span>{defaultMessage}</span>}
                messageType="success"
                value={currentValue}
                onChange={onChange}
                showMessage={true}
                prefixElement={
                    <Icon className="left-icon" variant={iconVariant}></Icon>
                }
                sufixElement={
                    <StyledButton
                        className="mx-3 apply-button"
                        variant="transparent"
                        disabled={!currentValue.trim()}
                        type="submit"
                    >
                        {buttonText}
                    </StyledButton>
                }
            />
        </Container>
    )
}

WithSuccessMessage.args = {
    placeholder: placeholder,
    buttonText: buttonText,
} as TextFieldProps

export const WithErrorMessage: Story = (args: TextFieldProps) => {
    const [currentValue, setCurrentValue] = useState('')

    const onChange = (e) => {
        setCurrentValue(e.target.value)
    }

    return (
        <Container>
            <TextField
                {...args}
                messageContent={<span>{defaultMessage}</span>}
                messageType="error"
                value={currentValue}
                onChange={onChange}
                showMessage={true}
                prefixElement={
                    <Icon className="left-icon" variant={iconVariant}></Icon>
                }
                sufixElement={
                    <StyledButton
                        className="mx-3 apply-button"
                        variant="transparent"
                        disabled={!currentValue.trim()}
                        type="submit"
                    >
                        {buttonText}
                    </StyledButton>
                }
            />
        </Container>
    )
}

WithErrorMessage.args = {
    placeholder: placeholder,
    buttonText: buttonText,
} as TextFieldProps

export const WithLoader: Story = (args: TextFieldProps) => {
    return (
        <Container>
            <TextField
                {...args}
                isLoading={true}
                loader={<Icon variant="icon-Loading-dots" />}
                prefixElement={
                    <Icon className="left-icon" variant={iconVariant}></Icon>
                }
                sufixElement={
                    <StyledButton
                        className="mx-3 apply-button"
                        variant="transparent"
                        type="submit"
                    >
                        {buttonText}
                    </StyledButton>
                }
            />
        </Container>
    )
}

WithLoader.args = {
    placeholder: placeholder,
    buttonText: buttonText,
} as TextFieldProps

export const Disabled: Story = (args: TextFieldProps) => {
    return (
        <Container>
            <TextField
                {...args}
                isDisabled={true}
                prefixElement={
                    <Icon className="left-icon" variant={iconVariant}></Icon>
                }
                sufixElement={
                    <StyledButton
                        className="mx-3 apply-button"
                        variant="transparent"
                        disabled={true}
                        type="submit"
                    >
                        {buttonText}
                    </StyledButton>
                }
            />
        </Container>
    )
}

Disabled.args = {
    placeholder: placeholder,
    buttonText: buttonText,
} as TextFieldProps
