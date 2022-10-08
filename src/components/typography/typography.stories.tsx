import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import {
    Heading as HeadingComponent,
    HeadingProps,
    Text as TextComponent,
    TextProps,
    TypographyContainer,
} from '.'

export default {
    title: 'styles/Typography',
} as Meta

const text = 'Text Sample'

export const Heading: Story = (args: HeadingProps) => (
    <HeadingComponent {...args} />
)

Heading.args = {
    children: text,
    variant: 'h1',
}

export const Text: Story = (args: TextProps) => <TextComponent {...args} />

Text.args = {
    children: text,
    variant: 'paragraph',
} as TextProps

export const Typography: Story = () => {
    return (
        <TypographyContainer>
            <h1>H1</h1>
            <h2>H2</h2>
            <h3>H3</h3>
            <h4>H4</h4>
            <h5>H5</h5>
            <h6>H6</h6>
        </TypographyContainer>
    )
}
