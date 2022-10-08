import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Collapsible, CollapsibleProps } from './index'
import styled from 'styled-components'

export default {
    title: 'Example/Collapsible',
    component: Collapsible,
} as Meta

const StyledHeader = styled(Collapsible.Header)`
    color: var(--neutral-700);
    width: 100%;
    border: 1px solid var(--neutral-300);
`

const StyledBody = styled(Collapsible.Body)`
    width: 100%;
    border-bottom: 1px solid var(--neutral-300);
`

const Template: Story = ({ children, ...args }) => {
    return (
        <div>
            <h2>Title before</h2>
            <Collapsible>
                <StyledHeader aria-controls="t1">
                    <h1>header</h1>
                </StyledHeader>
                <StyledBody id="t1">
                    <p>
                        Veritatis non magni et sit aut ipsum. Ipsum praesentium
                        sit officiis magnam dolores expedita nemo et. Atque
                        eveniet beatae necessitatibus facilis id quae et
                        impedit. Consequuntur error nesciunt dicta.
                    </p>
                </StyledBody>
            </Collapsible>
            <h2>Title after</h2>
            <p>
                Officiis nam qui voluptatum laborum voluptate quo. Omnis odio
                dolor et reprehenderit nisi nihil corporis. Laudantium dolorem
                dolor voluptas et doloremque dignissimos dolor. Velit commodi
                pariatur quo eos ut quis eos voluptatem. Vitae et mollitia sint.
            </p>
        </div>
    )
}

export const Primary = Template.bind({})

Primary.args = {}

const ControlledStories: Story = ({ ...args }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = React.useState(args.isOpen)

    React.useEffect(() => {
        setIsOpen(args.isOpen)
    }, [args.isOpen])

    const toggle = () => setIsOpen((o) => !o)

    return (
        <div>
            <button onClick={toggle}>
                {isOpen ? 'close ' : 'open '} collapsible
            </button>
            <h2>Controlled colapsible</h2>
            <p>
                You can pass the props of <code>isOpen</code> and{' '}
                <code>onToggle</code> to control the state of the component.
            </p>

            <Collapsible isOpen={isOpen} onToggle={toggle}>
                <StyledHeader aria-controls="t1">
                    <h1>header</h1>
                </StyledHeader>
                <StyledBody id="t1">
                    <p>
                        Veritatis non magni et sit aut ipsum. Ipsum praesentium
                        sit officiis magnam dolores expedita nemo et. Atque
                        eveniet beatae necessitatibus facilis id quae et
                        impedit. Consequuntur error nesciunt dicta.
                    </p>
                </StyledBody>
            </Collapsible>
            <h2>Title after</h2>
            <p>
                Officiis nam qui voluptatum laborum voluptate quo. Omnis odio
                dolor et reprehenderit nisi nihil corporis. Laudantium dolorem
                dolor voluptas et doloremque dignissimos dolor. Velit commodi
                pariatur quo eos ut quis eos voluptatem. Vitae et mollitia sint.
            </p>
        </div>
    )
}

export const ControlledCollapsible = ControlledStories.bind({})

ControlledCollapsible.args = {
    isOpen: true,
} as CollapsibleProps
