import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { customScrollBar } from '.'
import styled from 'styled-components'

export default {
    title: 'Example/Custom Scroll bar',
} as Meta

const Box = styled.div`
    height: 150px;
    width: 150px;
    overflow: auto;
    padding: 8px;
`

const FirstBox = styled(Box)`
    ${customScrollBar}
    background: #6246ea;
    color: white;
`

const SecondBox = styled(Box)`
    background: #d1d1e9;
`
const ThirdBox = styled(Box)`
    ${customScrollBar}
    --track-background: #d1d1e9;
    --handle-background: rgba(98, 70, 234, 0.5);
    --handle-hover-background: rgba(98, 70, 234, 1);

    color: white;
    background: #2b2c34;
`

export const Template: Story = () => (
    <div className="d-flex">
        <div className="mr-4">
            <h2>Custom scroll Bar</h2>
            <FirstBox>
                Reprehenderit assumenda incidunt iste et ut ab. Quo consectetur
                est non vitae. Occaecati maiores corporis doloremque. Quasi
                dolore illum. Quas quas quod voluptatem voluptatibus
                necessitatibus numquam dolorum ipsum qui.
            </FirstBox>
        </div>
        <div className="mr-4">
            <h2>Default scroll Bar</h2>
            <SecondBox>
                Reprehenderit assumenda incidunt iste et ut ab. Quo consectetur
                est non vitae. Occaecati maiores corporis doloremque. Quasi
                dolore illum. Quas quas quod voluptatem voluptatibus
                necessitatibus numquam dolorum ipsum qui.
            </SecondBox>
        </div>
        <div>
            <h2>Even more custom scroll Bar</h2>
            <ThirdBox>
                Reprehenderit assumenda incidunt iste et ut ab. Quo consectetur
                est non vitae. Occaecati maiores corporis doloremque. Quasi
                dolore illum. Quas quas quod voluptatem voluptatibus
                necessitatibus numquam dolorum ipsum qui.
            </ThirdBox>
            <p style={{ width: 300 }}>
                If you need to update the colors of the scroll bar you just need
                to update these CSS custom properties
            </p>
            <ul>
                <li>
                    <code>--track-background</code>
                </li>
                <li>
                    <code>--handle-background</code>
                </li>
                <li>
                    <code>--handle-hover-background</code>
                </li>
            </ul>
        </div>
    </div>
)

Template.args = {}
