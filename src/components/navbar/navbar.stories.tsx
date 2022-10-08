import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { MobileMenuProps, Navbar, NavBarProps } from './'
import { ThemeProvider } from 'styled-components'
import { NavItem } from './nav-item'
import { ActionNavItem, ActionDropDownNavLink } from './action-nav-item'
import { NavlinkMobileDropdownModal } from './dropdown-modal-navlink'
import {
    DropDownMenu,
    DropDownHeader,
    DropDownItem,
    DropDownDivider,
} from '../dropdown'
import { Radio } from '../form'
import { NavLink } from './nav-link'
import { DropDownNavLink } from './dropdown-nav-link'
import { Icon } from '../icon'
import { MobileMenuButton } from './close-mobile-menu'
import Button from '../button'

const COLORS = {
    dark: 'rgb(18, 18, 18)',
    blue: 'blue',
}

export default {
    title: 'Example/Navbar',
    component: Navbar,
    parameters: {
        backgrounds: {
            default: 'Gray',
        },
    },
} as Meta

const Template: Story<NavBarProps> = ({ ...args }: NavBarProps) => (
    <ThemeProvider theme={{ colors: COLORS }}>
        <Navbar {...args}></Navbar>
    </ThemeProvider>
)

export const Primary = Template.bind({})
export const Transparent = Template.bind({})
export const WithChild = Template.bind({})
export const WithContent = ({ ...args }: NavBarProps) => (
    <ThemeProvider theme={{ colors: COLORS }}>
        <Navbar {...args}></Navbar>
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis
                at diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis
                at diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis
                at diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis
                at diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis
                at diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
                diam euismod, tristique ligula id, pellentesque dolor. Proin
                pellentesque scelerisque felis, sed luctus nibh suscipit
                placerat.
            </p>
        </div>
    </ThemeProvider>
)

const MobileMenu = ({ closeMenu, isMenuOpen }: MobileMenuProps) => {
    return (
        <DropDownMenu open="show">
            <DropDownItem>
                <MobileMenuButton
                    clickHandler={closeMenu}
                    isMenuOpen={isMenuOpen}
                />
            </DropDownItem>
            <DropDownItem>
                <a href="#">Action 0</a>
            </DropDownItem>
            <DropDownDivider></DropDownDivider>
            <DropDownHeader>Header demo</DropDownHeader>
            <DropDownItem>
                <a href="#">Action 1</a>
            </DropDownItem>
            <DropDownDivider></DropDownDivider>
            <DropDownItem>
                <a href="#">Action 2</a>
            </DropDownItem>
            <DropDownItem>
                <a href="#">Action 4</a>
            </DropDownItem>
            <DropDownItem>
                <a href="#">Action 3</a>
            </DropDownItem>
            <DropDownItem>
                <NavlinkMobileDropdownModal
                    itemText="modal dropdown"
                    closeMobileMenu={closeMenu}
                >
                    <DropDownMenu>
                        <DropDownHeader>Header demo</DropDownHeader>
                        <DropDownItem>
                            <div>
                                <form>
                                    <div className="form-group">
                                        <Radio
                                            label="value2"
                                            value="value2"
                                            name="idradio"
                                            checked
                                        />
                                    </div>
                                    <div className="form-group">
                                        <Radio
                                            label="value1"
                                            value="value1"
                                            name="idradio"
                                        />
                                    </div>
                                </form>
                            </div>
                        </DropDownItem>
                    </DropDownMenu>
                </NavlinkMobileDropdownModal>
            </DropDownItem>
        </DropDownMenu>
    )
}

const NavigationItems = () => {
    return (
        <>
            <NavItem>
                <NavLink>
                    <div>content</div>
                </NavLink>
            </NavItem>
            <NavItem>
                <DropDownNavLink label="dropdown content">
                    <DropDownMenu>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                    </DropDownMenu>
                </DropDownNavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <div>content 3</div>
                </NavLink>
            </NavItem>
        </>
    )
}

const ActionItems = () => {
    return (
        <>
            <ActionNavItem variant="dark">
                <ActionDropDownNavLink
                    itemText="action menu 1"
                    Icon={
                        <Icon variant="icon-Icon-Sign-In">
                            <span className="path1"></span>
                            <span className="path2"></span>
                        </Icon>
                    }
                >
                    <DropDownMenu>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                        <DropDownItem>
                            <a href="#">Action 2</a>
                        </DropDownItem>
                    </DropDownMenu>
                </ActionDropDownNavLink>
            </ActionNavItem>
            <ActionNavItem variant="dark">
                <ActionDropDownNavLink
                    itemText=""
                    Icon="icon-Currency-and-Language"
                >
                    <DropDownMenu alignment="right">
                        <DropDownHeader>Header demo</DropDownHeader>
                        <DropDownItem>
                            <a href="#">Action 1</a>
                        </DropDownItem>
                    </DropDownMenu>
                </ActionDropDownNavLink>
            </ActionNavItem>
        </>
    )
}

Primary.args = {
    variant: 'dark',
    navigationItems: <NavigationItems />,
    actionItems: <ActionItems />,
    MobileMenu: <MobileMenu />,
    brand: (
        <a className="navbar-brand" href="#">
            <i className="icon-casai-logo-white"></i>
        </a>
    ),
} as NavBarProps

Primary.parameters = {
    backgrounds: { default: 'Dark' },
}

Primary.args = {
    variant: 'light',
    navigationItems: <NavigationItems />,
    actionItems: <ActionItems />,
    MobileMenu: <MobileMenu />,
    brand: (
        <a className="navbar-brand" href="#">
            <Icon variant="icon-Casai-Logo-Color">
                <span className="path1"></span>
                <span className="path2"></span>
            </Icon>
        </a>
    ),
} as NavBarProps

Transparent.parameters = {
    backgrounds: { default: 'Gray' },
}

Transparent.args = {
    variant: 'transparent',
    navigationItems: <NavigationItems />,
    actionItems: <ActionItems />,
    MobileMenu: <MobileMenu />,
    brand: (
        <a className="navbar-brand" href="#">
            <i className="icon-casai-logo-white"></i>
        </a>
    ),
} as NavBarProps

WithChild.parameters = {
    backgrounds: { default: 'Gray' },
}

WithChild.args = {
    variant: 'transparent',
    children: (
        <Button
            variant="primary"
            className="navbar-nav navigation-section ml-auto mt-lg-0 justify-content-center pt-2"
        >
            Click me
        </Button>
    ),
    brand: (
        <a className="navbar-brand" href="#">
            <i className="icon-casai-logo-white"></i>
        </a>
    ),
} as NavBarProps

WithContent.args = {
    variant: 'light',
    navigationItems: <NavigationItems />,
    actionItems: <ActionItems />,
    MobileMenu: <MobileMenu />,
    brand: (
        <a className="navbar-brand" href="#">
            <Icon variant="icon-Casai-Logo-Color">
                <span className="path1"></span>
                <span className="path2"></span>
            </Icon>
        </a>
    ),
} as NavBarProps
