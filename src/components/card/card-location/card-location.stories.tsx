import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardLocation } from '.'

export default {
    title: 'Example/CardLocation',
    component: CardLocation,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <CardLocation {...args}>{children}</CardLocation>
)

export const Dark = Template.bind({})
export const Light = Template.bind({})

Dark.args = {
    variant: 'dark',
    children: 'Polanco, Mexico City',
}

Light.args = {
    variant: 'light',
    children: 'Polanco, Mexico City',
}
