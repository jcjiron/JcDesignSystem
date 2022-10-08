import React from 'react'
import styled, { css } from 'styled-components'
import { Padding, Margin } from './spacing'

export const SpacingStyles = css`
    ${Padding}
    ${Margin}
`
const Container = styled.div`
    ${Padding}
    ${Margin}
`

export type SpacingContainerProps = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType
} & React.HTMLAttributes<HTMLOrSVGElement>

export const SpacingContainer: React.FC<SpacingContainerProps> = ({
    as = 'div',
    ...props
}: SpacingContainerProps) => {
    return <Container as={as} {...props} />
}
