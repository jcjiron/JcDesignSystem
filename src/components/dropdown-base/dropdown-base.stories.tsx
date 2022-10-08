import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { DropdownBase, DropdownBaseProps } from './dropdown-base'
import styled from 'styled-components'
import { Counter } from '../counter'

export default {
    title: 'Example/Dropdown Base',
    component: DropdownBase,
} as Meta

const CounterContainer = styled.div`
    width: 200px;
    background: white;
    border-radius: 5px;
    padding: 1rem;
`

const Template: Story = ({ children, ...args }) => {
    const [value, setValue] = React.useState<number>(1)

    return (
        <DropdownBase {...args}>
            <CounterContainer>
                <Counter
                    placeholder="Guests"
                    onChange={setValue}
                    value={value}
                />
            </CounterContainer>
        </DropdownBase>
    )
}

const ControlledComponent: Story = ({ children, ...args }) => {
    const [value, setValue] = React.useState<number>(1)
    const [isOpen, setIsOpen] = React.useState<boolean>(false)

    const onOpen = () => {
        setIsOpen(true)
    }
    const onClose = () => {
        setIsOpen(false)
    }

    return (
        <>
            <button onClick={onOpen}>Open Dropdown</button>
            <DropdownBase
                {...args}
                onOpenClick={onOpen}
                isOpen={isOpen}
                onCloseClick={onClose}
            >
                <CounterContainer>
                    <Counter
                        placeholder="Guests"
                        onChange={setValue}
                        value={value}
                    />
                </CounterContainer>
            </DropdownBase>
        </>
    )
}

export const Primary = Template.bind({})
export const FullScreen = Template.bind({})
export const Controlled = ControlledComponent.bind({})

Primary.args = {
    placeholder: 'Guests',
    fullScreen: false,
    variant: 'light',
    disabled: false,
} as DropdownBaseProps

FullScreen.args = {
    placeholder: 'Guests',
    fullScreen: true,
    variant: 'light',
    disabled: false,
} as DropdownBaseProps

Controlled.args = {
    placeholder: 'Guests',
    fullScreen: true,
    variant: 'light',
} as DropdownBaseProps
