import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardPrice } from '.'

export default {
    title: 'Example/CardPrice',
    component: CardPrice,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <CardPrice {...args}>{children}</CardPrice>
)

export const Dark = Template.bind({})
export const Light = Template.bind({})

Dark.args = {
    variant: 'dark',
    children: '$80.00 USD',
}

Light.args = {
    variant: 'light',
    children: '$80.00 USD',
}
