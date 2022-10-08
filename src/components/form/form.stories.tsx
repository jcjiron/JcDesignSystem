import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import { Radio } from './index'
import { FormCheck } from './form-check'

const COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
}

export default {
    title: 'Example/Forms',
    component: Radio,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <ThemeProvider theme={{ colors: COLORS }}>
        <form>
            <FormCheck>
                <Radio label="value1" value="value1" name="idradio" />
            </FormCheck>
            <FormCheck>
                <Radio label="value2" value="value2" name="idradio" checked />
            </FormCheck>
        </form>
    </ThemeProvider>
)

export const RadioExample = Template.bind({})
