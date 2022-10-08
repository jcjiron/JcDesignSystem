import { IconProps } from '../../../icon/index'
import { List } from '../../../list/list'
import { ListItem, ListItemProps } from '../../../list/item'
import React from 'react'
import { ReactElement } from 'react'
import styled from 'styled-components'

export type AboutApartmentPropertyProps = ListItemProps

const ListPropertyItem = styled(ListItem)`
    color: var(--paragraph-color);
    @media (max-width: 576px) {
        flex-basis: 45% !important;
    }
`

export const AboutApartmentProperty = ({
    bulletIcon,
    children,
}: AboutApartmentPropertyProps) => {
    return (
        <ListPropertyItem bulletIcon={bulletIcon}>{children}</ListPropertyItem>
    )
}

export interface AboutApartmentProps {
    title: string
    subtitle: string
    icon: ReactElement<IconProps>
    properties: ReactElement<AboutApartmentPropertyProps>[]
    className?: string
}

export const AboutApartment = ({
    subtitle,
    title,
    icon,
    properties,
    className,
}: AboutApartmentProps) => {
    return (
        <List className={className}>
            <ListItem
                title={title}
                bulletIcon={icon}
                subTitle={subtitle}
                className="align-items-center"
            />
            <List direction="horizontal" columns={3}>
                {properties}
            </List>
        </List>
    )
}
