import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { CardLabel } from '.'

export default {
    title: 'Example/CardLabel',
    component: CardLabel,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <CardLabel {...args}>{children}</CardLabel>
)

export const Primary = Template.bind({})

Primary.args = {
    children: 'Label',
}
