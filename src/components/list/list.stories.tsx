import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Icon } from '../icon'
import { List, ListProps } from './list'
import { ListItem } from './item'

export default {
    title: 'Example/List',
    component: List,
} as Meta

const Template: Story<ListProps> = ({ ...args }: ListProps) => (
    <List {...args} />
)

export const Primary = Template.bind({})

Primary.args = {
    children: [
        <ListItem
            bulletIcon={
                <Icon variant="icon-Checked-Radio">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </Icon>
            }
            subTitle="Photos, decor and furniture placing may vary depending on the unit booked."
            title="Luxury Apartment"
            children="Our properties are cleaned to the highest hygiene and health standards"
        />,
        <ListItem
            bulletIcon={
                <Icon variant="icon-Checked-Radio">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </Icon>
            }
            subTitle="Photos, decor and furniture placing may vary depending on the unit booked."
            title="Luxury Apartment"
            children="Our properties are cleaned to the highest hygiene and health standards"
        />,
        <ListItem
            bulletIcon={
                <Icon variant="icon-Checked-Radio">
                    <span className="path1"></span>
                    <span className="path2"></span>
                </Icon>
            }
            subTitle="Photos, decor and furniture placing may vary depending on the unit booked."
            title="Luxury Apartment"
            children="Our properties are cleaned to the highest hygiene and health standards"
        />,
    ],
} as ListProps

export const MultipleVariants = Template.bind({})
MultipleVariants.args = {
    children: [
        <ListItem
            subTitle="Photos, decor and furniture placing may vary depending on the unit booked."
            title="Luxury Apartment"
            children="Our properties are cleaned to the highest hygiene and health standards"
        />,
        <ListItem
            title="Luxury Apartment"
            children="Our properties are cleaned to the highest hygiene and health standards"
        />,
        <ListItem
            children={
                <>
                    <span>
                        Stay longer, save more.We have everything you need to
                        turn our departments in your dreamed home.
                    </span>
                    <br />
                    <a href="#">Read More</a>
                </>
            }
        />,
    ],
} as ListProps
