import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'
import {
    DropDown,
    DropDownDivider,
    DropDownHeader,
    DropDownItem,
    DropDownMenu,
    DropDownToggle,
} from './index'

const COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
}

export default {
    title: 'Example/DropDown',
    component: DropDownMenu,
} as Meta

const Template: Story = ({ children, ...args }) => (
    <ThemeProvider theme={{ colors: COLORS }}>
        <DropDown>
            <DropDownToggle
                dropDownMenu={
                    <DropDownMenu
                        alignment={args.dropdDownMenuAligment}
                        open={args.dropdDownOpen}
                    >
                        <DropDownHeader>Header One</DropDownHeader>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="#">Action 2</a>
                        </DropDownItem>
                        <DropDownDivider />
                        <DropDownHeader>Header two</DropDownHeader>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="#">Action 2</a>
                        </DropDownItem>
                    </DropDownMenu>
                }
            >
                {'DropDown Text'}
            </DropDownToggle>
        </DropDown>
    </ThemeProvider>
)

export const DropdownExample = Template.bind({})

DropdownExample.args = {
    dropdDownMenuAligment: 'normal',
    dropdDownOpen: '',
}

const Templatetwo: Story = ({ children, ...args }) => (
    <ThemeProvider theme={{ colors: COLORS }}>
        <DropDown dropDownOpen={args.dropDownOpen}>
            <DropDownToggle
                dropDownMenu={
                    <DropDownMenu
                        alignment={args.dropdDownMenuAligment}
                        open={args.dropdDownOpen}
                    >
                        <DropDownHeader>Header One</DropDownHeader>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="#">Action 2</a>
                        </DropDownItem>
                        <DropDownDivider />
                        <DropDownHeader>Header two</DropDownHeader>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="#">Action 2</a>
                        </DropDownItem>
                    </DropDownMenu>
                }
            >
                {'DropDown Text'}
            </DropDownToggle>
        </DropDown>
    </ThemeProvider>
)

export const DropdownOpenRightExample = Templatetwo.bind({})
DropdownOpenRightExample.args = {
    ...DropdownExample.args,
    dropDownOpen: true,
    dropdDownMenuAligment: 'right',
}
