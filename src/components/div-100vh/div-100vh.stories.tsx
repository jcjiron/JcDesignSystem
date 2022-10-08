import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Div100vh } from './index'

export default {
    title: 'Example/Div100vh',
    component: Div100vh,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta

const Template: Story = ({ children, ...args }) => (
    <Div100vh
        className="d-flex justify-content-center align-items-center"
        style={{
            background: 'var(--primary)',
            color: 'white',
            flexDirection: 'column',
        }}
    >
        <h1>100 vh</h1>
        <div className="px-5">
            <p>
                In mobile browsers, the real height of the viewport is dynamic,
                as browser "chrome" (panels) slide away on scrolling. The
                browser developers faced two choices: either to reflow the page
                as the pixel value of a vh changes, or ignore the fact that the
                browser panel covers part of the screen.
            </p>
            <p>
                The browser panels are supposed to slide away smoothly, and
                because the layout reflow during scrolling will not look smooth,
                the browser developers went for the second option.
            </p>
            <p>
                It may work for the most of use cases, but if you're looking for
                an app-like full-screen experience, or want to make sure that
                the call to action button at the bottom of your splash screen
                isn't covered, you may need to know the fair value of a vh.
            </p>
            <div className="row">
                <div
                    className="d-flex col-6 align-items-center"
                    style={{ flexDirection: 'column' }}
                >
                    <code
                        style={{
                            background: '#dee2e6',
                            color: 'var(--primary)',
                            fontSize: 22,
                            padding: 8,
                            borderRadius: 6,
                            marginBottom: 12,
                        }}
                    >
                        {"<div style={{height: '100vh'}}/>"}
                    </code>
                    <img
                        src="https://raw.githubusercontent.com/mvasin/react-div-100vh/master/images/regular-div.png"
                        height="400"
                        style={{ objectFit: 'contain' }}
                        alt=""
                    />
                </div>
                <div
                    className="d-flex col-6 align-items-center"
                    style={{ flexDirection: 'column' }}
                >
                    <code
                        style={{
                            background: '#dee2e6',
                            color: 'var(--primary)',
                            fontSize: 22,
                            padding: 8,
                            borderRadius: 6,
                            marginBottom: 12,
                        }}
                    >
                        {'<Div100vh>'}
                    </code>
                    <img
                        src="https://raw.githubusercontent.com/mvasin/react-div-100vh/master/images/react-div-100vh.png"
                        height="400"
                        style={{ objectFit: 'contain' }}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </Div100vh>
)

export const DropdownExample = Template.bind({})

DropdownExample.args = {
    dropdDownMenuAligment: 'normal',
    dropdDownOpen: '',
}
