import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { TruncatedText, TruncatedTextProps } from '.'
import { Text } from '../typography'

export default {
    title: 'Example/Truncated Text',
} as Meta

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Nam eget nisl euismod, rhoncus nunc eu, accumsan tellus.
Suspendisse euismod, nunc a condimentum consectetur, nisi eros egestas
nisl, eget gravida nunc leo eu nisl.
`

export const Heading: Story = (args: TruncatedTextProps) => (
    <TruncatedText
        {...args}
        style={{
            background: 'var(--primary)',
            width: '200px',
            color: 'white',
        }}
    />
)

Heading.args = {
    numberOfLines: 1,
    as: Text,
    children: longText,
    wordBreak: 'break-all',
} as TruncatedTextProps
