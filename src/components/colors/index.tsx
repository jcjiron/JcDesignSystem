import React from 'react'
import styled from 'styled-components'
import { TextColorStyles, BackgroundColorStyles } from './colors'
export { TextColorStyles, BackgroundColorStyles } from './colors'

const Container = styled.div`
    ${TextColorStyles}
    ${BackgroundColorStyles}
`

export type ColorsContainerProps = {
    as?: keyof JSX.IntrinsicElements | React.ComponentType
} & React.HTMLAttributes<HTMLOrSVGElement>

export const ColorsContainer: React.FC<ColorsContainerProps> = ({
    as = 'div',
    ...props
}: ColorsContainerProps) => {
    return <Container as={as} {...props} />
}
