import { ReactElement, ReactNode } from 'react'
import { IconProps } from '../icon'
export interface ListItemProps {
    bulletIcon?: ReactElement<IconProps>
    className?: string
    children?: string | ReactNode
    title?: string | ReactNode
    subTitle?: string | ReactNode
    onClick?: () => void
}
export declare const ListItem: ({
    bulletIcon,
    className,
    children,
    title,
    subTitle,
    onClick,
}: ListItemProps) => JSX.Element
