import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardCapacity } from '.'

export default {
    title: 'Example/CardCapacity',
    component: CardCapacity,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <CardCapacity {...args}>{children}</CardCapacity>
)

export const Dark = Template.bind({})
export const Light = Template.bind({})

Dark.args = {
    variant: 'dark',
    children: '4 guests · 2 bathrooms · 2 bedrooms',
}

Light.args = {
    variant: 'light',
    children: '4 guests · 2 bathrooms · 2 bedrooms',
}
