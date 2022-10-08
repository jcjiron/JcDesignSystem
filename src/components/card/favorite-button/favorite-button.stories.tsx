import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { FavoriteButton } from '.'

export default {
    title: 'Example/FavoriteButton',
    component: FavoriteButton,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <FavoriteButton {...args}></FavoriteButton>
)

export const Primary = Template.bind({})

Primary.args = {}
