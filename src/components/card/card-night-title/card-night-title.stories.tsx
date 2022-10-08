import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardNightTitle } from '.'

export default {
    title: 'Example/CardNightTitle',
    component: CardNightTitle,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <CardNightTitle {...args}>{children}</CardNightTitle>
)

export const Dark = Template.bind({})
export const Light = Template.bind({})

Dark.args = {
    variant: 'dark',
    children: '/ avg price',
}

Light.args = {
    variant: 'light',
    children: '/ avg price',
}
