import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { ColorsContainer, ColorsContainerProps } from './index'
import styled from 'styled-components'

export default {
    title: 'Styles/Colors',
} as Meta

export const TextColor: Story = (args: ColorsContainerProps) => (
    <ColorsContainer as={args.as}>
        <p className="text-primary">text-primary</p>
        <p className="text-primary-100">text-primary-100</p>
        <p className="text-primary-200">text-primary-200</p>
        <p className="text-primary-300">text-primary-300</p>
        <p className="text-primary-400">text-primary-400</p>
        <p className="text-primary-500">text-primary-500</p>
        <p className="text-primary-600">text-primary-600</p>
        <p className="text-primary-700">text-primary-700</p>
        <p className="text-primary-800">text-primary-800</p>
        <p className="text-neutral-100">text-neutral-100</p>
        <p className="text-neutral-200">text-neutral-200</p>
        <p className="text-neutral-300">text-neutral-300</p>
        <p className="text-neutral-400">text-neutral-400</p>
        <p className="text-neutral-500">text-neutral-500</p>
        <p className="text-neutral-600">text-neutral-600</p>
        <p className="text-neutral-700">text-neutral-700</p>
        <p className="text-neutral-800">text-neutral-800</p>
    </ColorsContainer>
)

TextColor.args = {
    as: 'div',
    className: 'm-10',
} as ColorsContainerProps

const Box = styled.div`
    border-radius: 10px;
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackgroundColor: Story = (args: ColorsContainerProps) => (
    <ColorsContainer as={args.as}>
        <h2>Primary</h2>
        <div className="d-flex">
            <Box className="bg-primary">bg-primary</Box>
            <Box className="bg-primary-100">bg-primary-100</Box>
            <Box className="bg-primary-200">bg-primary-200</Box>
            <Box className="bg-primary-300">bg-primary-300</Box>
            <Box className="bg-primary-400">bg-primary-400</Box>
            <Box className="bg-primary-500 text-neutral-100">
                bg-primary-500
            </Box>
            <Box className="bg-primary-600 text-neutral-100">
                bg-primary-600
            </Box>
            <Box className="bg-primary-700 text-neutral-100">
                bg-primary-700
            </Box>
            <Box className="bg-primary-800 text-neutral-100">
                bg-primary-800
            </Box>
        </div>
        <h2>Neutral</h2>
        <div className="d-flex">
            <Box className="bg-neutral-100">bg-neutral-100</Box>
            <Box className="bg-neutral-200">bg-neutral-200</Box>
            <Box className="bg-neutral-300">bg-neutral-300</Box>
            <Box className="bg-neutral-400">bg-neutral-400</Box>
            <Box className="bg-neutral-500 text-neutral-100">
                bg-neutral-500
            </Box>
            <Box className="bg-neutral-600 text-neutral-100">
                bg-neutral-600
            </Box>
            <Box className="bg-neutral-700 text-neutral-100">
                bg-neutral-700
            </Box>
            <Box className="bg-neutral-800 text-neutral-100">
                bg-neutral-800
            </Box>
        </div>
    </ColorsContainer>
)

BackgroundColor.args = {
    as: 'div',
    className: 'm-10',
} as ColorsContainerProps
