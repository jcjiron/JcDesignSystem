import React from 'react'
import styled from 'styled-components'

export type StaticColumnProps = React.ComponentPropsWithoutRef<'div'>
const Container = styled.div`
    overflow: hidden;
    height: fit-content;

    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
        position: sticky;
        left: 0;
        top: 0;
    }
`

export const StaticColumn = ({ className, ...props }: StaticColumnProps) => {
    return (
        <Container
            {...props}
            className={`${className} col-12 col-12 col-md-4`}
        />
    )
}
