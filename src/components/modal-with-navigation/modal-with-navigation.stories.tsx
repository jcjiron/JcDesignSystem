import React, { useState } from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
    ModalWithNavigation,
    ModalWithNavigationProps,
} from './modal-with-navigation'
import { Icon } from '../icon'

export default {
    title: 'Example/ModalWithNavigation',
    component: ModalWithNavigation,
} as Meta

const Template: Story = ({ ...args }: ModalWithNavigationProps) => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button onClick={() => setOpen(true)}>Open Alert</button>
            <ModalWithNavigation
                {...args}
                show={open}
                onClose={() => setOpen(false)}
            />
        </div>
    )
}

export const Primary = Template.bind({})
Primary.args = {
    title: 'action bar title',
    children: 'content',
}
export const CustomIcons = Template.bind({})
CustomIcons.args = {
    title: 'action bar title',
    children: 'content',
    CloseIcon: <Icon variant="icon-Amenities" />,
    GoBackIcon: <Icon variant="icon-notification" />,
}
