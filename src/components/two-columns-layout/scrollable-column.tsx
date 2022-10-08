import React from 'react'
import styled from 'styled-components'

export type ScrollableColumnProps = React.ComponentPropsWithoutRef<'div'>

const Container = styled.div``

export const ScrollableColumn = ({
    className,
    ...props
}: ScrollableColumnProps) => {
    return <Container {...props} className={`${className} col-12 col-md-8`} />
}
