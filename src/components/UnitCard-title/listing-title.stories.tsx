import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { UnitCardTitle, UnitCardTitleProps } from './'

export default {
    title: 'Example/UnitCard Title',
    component: UnitCardTitle,
} as Meta

const Template: Story<UnitCardTitleProps> = ({
    ...args
}: UnitCardTitleProps) => <UnitCardTitle {...args}></UnitCardTitle>

export const Home = Template.bind({})
export const Search = Template.bind({})
export const PWA = Template.bind({})

Home.args = {
    variant: 'home',
    title: 'Zapotec Sophisticated Suite',
}
Search.args = {
    variant: 'search',
    title: 'Zapotec Sophisticated Suite',
}
PWA.args = {
    variant: 'pwa',
    title: 'Zapotec Sophisticated Suite',
}
