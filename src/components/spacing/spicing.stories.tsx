import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { SpacingContainer, SpacingContainerProps, SpacingStyles } from './index'
import styled from 'styled-components'
import { customScrollBar } from '../scroll-bar'

export default {
    title: 'Styles/Spacing',
} as Meta

const text = 'Text Sample'

const Box = styled.div`
    background-color: rgba(244, 63, 94);
    color: white;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.375rem;
`

const Container = styled(SpacingContainer)`
    ${SpacingStyles}
    th {
        border: 1px solid #f3f0f9;
        padding: 8px;
    }
    @media (min-width: 768px) {
        .md\:m-2 {
            margin: 8px;
        }
    }
    tr:nth-child(even) {
        background-color: #e6e0f3;
    }
    tr:hover {
        background-color: #cdc1e7;
    }
    th {
        text-align: left;
        background-color: #8264c3;
        color: white;
    }
    .table-container {
        ${customScrollBar};
        margin: 16px 0;
        max-height: 500px;
        overflow-y: scroll;
    }
    th,
    td {
        padding: 8px 16px;
        text-align: center;
    }

    table,
    th,
    td {
        border: 1px solid #5b4689;
    }

    code {
        color: #5b4689;
        font-weight: 400;
        font-family: monospace;
    }
`

const ExampleContainer = styled.div`
    background-image: linear-gradient(to right, #fff1f2, #ffe4e6);
    border-radius: 0.75rem;
    display: flex;
    width: fit-content;
    height: fit-content;
`

const SpacingTable = ({ type }: { type: 'padding' | 'margin' }) => {
    const prefix = type === 'padding' ? 'p' : 'm'
    const className = type === 'padding' ? 'padding' : 'margin'
    const properties = [
        '0px',
        '2px',
        '4px',
        '8px',
        '12px',
        '16px',
        '20px',
        '24px',
        '32px',
        '40px',
    ]
    const classes = [
        '-0',
        '-0.5',
        '-1',
        '-2',
        '-3',
        '-4',
        '-5',
        '-6',
        '-8',
        '-10',
    ]
    const combinations = [
        [`${prefix}`, `${className}`],
        [`${prefix}l`, `${className}-left`],
        [`${prefix}r`, `${className}-right`],
        [`${prefix}t`, `${className}-top`],
        [`${prefix}b`, `${className}-bottom`],
        [`${prefix}x`, `${className}-left`, `${className}-right`],
        [`${prefix}y`, `${className}-top`, `${className}-bottom`],
    ]
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Class</th>
                        <th>Properties</th>
                    </tr>
                </thead>
                <tbody>
                    {combinations.map((combination, index) => {
                        const [prefix, class1, class2] = combination
                        return properties.map((property, index) => (
                            <tr key={index}>
                                <td>
                                    {prefix}
                                    {classes[index]}
                                </td>
                                <td>
                                    {class1}: {property}
                                    <br />
                                    {class2 && `${class2}: ${property}`}
                                </td>
                            </tr>
                        ))
                    })}
                </tbody>
            </table>
        </div>
    )
}

export const Margin: Story = (args: SpacingContainerProps) => (
    <Container as={args.as}>
        <h1 className="m-4 md:m-2">Margin</h1>
        <p>Utilities for controlling an element's margin.</p>
        <SpacingTable type="margin" />
        <h2>Add margin to a single side</h2>
        <p>
            Control the margin on one side of an element using the{' '}
            <code>{'m{t|r|b|l}-{size}'}</code> utilities.
        </p>
        <p>
            For example, <code>mt-6</code> would add <code>1.5rem</code> of
            margin to the top of an element,
            <code>mr-4</code> would add <code>1rem</code> of margin to the right
            of an element, <code>mb-8</code> would add <code>2rem</code> of
            margin to the bottom of an element, and <code>ml-2</code> would add{' '}
            <code>0.5rem</code> of margin to the left of an element.
        </p>
        <h2>Add horizontal margin</h2>
        <p>
            Control the horizontal margin of an element using the{' '}
            <code>{'mx-{size}'}</code> utilities.
        </p>
        <h2>Add vertical margin</h2>
        <p>
            Control the vertical margin of an element using the{' '}
            <code>{'my-{size}'}</code> utilities.
        </p>
        <h2>Add margin to all sides</h2>
        <p>
            Control the margin on all sides of an element using the{' '}
            <code>{'m-{size}'}</code> utilities.
        </p>
        <hr />
        <ExampleContainer>
            <Box className={args.className}>{text}</Box>
        </ExampleContainer>
    </Container>
)

Margin.args = {
    as: 'div',
    className: 'm-10',
} as SpacingContainerProps

export const Padding: Story = (args: SpacingContainerProps) => (
    <Container {...args}>
        <h1>Padding</h1>
        <p>Utilities for controlling an element's padding.</p>
        <SpacingTable type="padding" />
        <h2>Add padding to a single side</h2>
        <p>
            Control the padding on one side of an element using the{' '}
            <code>{'p{t|r|b|l}-{size}'}</code> utilities.
        </p>
        <p>
            For example, <code>pt-6</code> would add <code>1.5rem</code> of
            padding to the top of an element,
            <code>pr-4</code> would add <code>1rem</code> of padding to the
            right of an element, <code>pb-8</code> would add <code>2rem</code>{' '}
            of padding to the bottom of an element, and <code>pl-2</code> would
            add <code>0.5rem</code> of padding to the left of an element.
        </p>
        <h2>Add horizontal padding</h2>
        <p>
            Control the horizontal padding of an element using the{' '}
            <code>{'px-{size}'}</code> utilities.
        </p>
        <h2>Add vertical padding</h2>
        <p>
            Control the vertical padding of an element using the{' '}
            <code>{'py-{size}'}</code> utilities.
        </p>
        <h2>Add padding to all sides</h2>
        <p>
            Control the padding on all sides of an element using the{' '}
            <code>{'p-{size}'}</code> utilities.
        </p>
        <hr />
        <ExampleContainer className={args.className}>
            <Box>{text}</Box>
        </ExampleContainer>
    </Container>
)

Padding.args = {
    as: 'main',
    className: 'p-10',
} as SpacingContainerProps
