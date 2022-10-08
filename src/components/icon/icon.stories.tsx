import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Icon, IconProps } from './index'

const COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
}

export default {
    title: 'Example/Icon',
    component: Icon,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <ThemeProvider theme={{ colors: COLORS }}>
        <Icon variant={args.variant} style={{ fontSize: 32 }} />
    </ThemeProvider>
)

export const IconExample = Template.bind({})

IconExample.args = {
    variant: 'icon-Email-Icon',
} as IconProps
