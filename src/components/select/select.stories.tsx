import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Select, Option } from './'

export default {
    title: 'Example/Select',
    component: Select,
} as Meta

const options = [
    { name: 'Jacynthe', value: 'bea05df7-e5df-4325-8be1-80617826a554' },
    { name: 'Ayden', value: '0e42020f-a805-4727-a7ec-d6f844abb4a1' },
    { name: 'Maybelle', value: '40249e92-f662-4255-825f-8c5d3878b48f' },
    { name: 'Akeem', value: '371f6bc1-8b0e-4566-b02c-1a6c15e66c36' },
    { name: 'Drew', value: '02522d0d-2adc-40b5-b89a-116c4ed62c96' },
    { name: 'Saige', value: '5db2a5b2-eaf8-4c07-a200-8c13c010b52b' },
    { name: 'Armando', value: '6739b9d3-3882-4279-9223-9164d9b07d73' },
    { name: 'Gwendolyn', value: 'd8ec0684-33c0-4f81-9787-4b22fd27805d' },
    { name: 'Julianne', value: 'fcd52906-8c81-466d-963a-7a1fd6dd52ec' },
    { name: 'Nyasia', value: '5b0e971b-21cd-4751-b010-cd5675f0be95' },
    { name: 'Edwin', value: '45b55997-1914-4d59-acdb-a5992431ddfb' },
    { name: 'Annabelle', value: '11b94a56-a7ab-4c57-bfff-969b3f818abc' },
    { name: 'Toni', value: '752bb773-e9d8-477f-89d1-7b56f152dfa1' },
    { name: 'Vesta', value: 'a70c0280-0064-4f61-a797-234296791a99' },
]

const Template: Story = ({ children, ...args }) => {
    const [value, setValue] = React.useState<Option>(options[0])

    return (
        <>
            <p style={{ color: '#8B6FC9' }}>
                Selected value: {value ? value.name : ''}
            </p>
            <Select
                {...args}
                onChange={setValue}
                selectedOption={value}
                options={options}
            />
        </>
    )
}

const ControlledComponent: Story = ({ children, ...args }) => {
    const [value, setValue] = React.useState<Option>(options[0])
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
            <button onClick={onClose}>Close Dropdown</button>
            <p style={{ color: '#8B6FC9' }}>
                Selected value: {value ? value.name : ''}
            </p>
            <p style={{ color: '#8B6FC9' }}>
                The modal is {isOpen ? 'open' : 'closed'}
            </p>
            <Select
                {...args}
                onChange={setValue}
                selectedOption={value}
                options={options}
                onOpenClick={onOpen}
                isOpen={isOpen}
                onCloseClick={onClose}
            />
        </>
    )
}

export const LightTheme = Template.bind({})
export const DarkTheme = Template.bind({})
export const Controlled = ControlledComponent.bind({})

LightTheme.args = {
    placeholder: 'Select a user',
    variant: 'light',
    fullScreen: true,
    disabled: false,
}

DarkTheme.args = {
    placeholder: 'Select a user',
    variant: 'dark',
    fullScreen: false,
    disabled: false,
}

Controlled.args = {
    placeholder: 'Select a user',
    variant: 'dark',
    fullScreen: false,
    disabled: false,
}
