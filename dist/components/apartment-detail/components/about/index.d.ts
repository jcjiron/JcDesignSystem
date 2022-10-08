import { IconProps } from '../../../icon/index'
import { ListItemProps } from '../../../list/item'
import { ReactElement } from 'react'
export declare type AboutApartmentPropertyProps = ListItemProps
export declare const AboutApartmentProperty: ({
    bulletIcon,
    children,
}: AboutApartmentPropertyProps) => JSX.Element
export interface AboutApartmentProps {
    title: string
    subtitle: string
    icon: ReactElement<IconProps>
    properties: ReactElement<AboutApartmentPropertyProps>[]
    className?: string
}
export declare const AboutApartment: ({
    subtitle,
    title,
    icon,
    properties,
    className,
}: AboutApartmentProps) => JSX.Element
