import { ReactElement } from 'react'
import '../../../assets/styles/bootstrap/list-group.scss'
import { ListItemProps } from './item'
export interface ListProps {
    className?: string
    direction?: 'vertical' | 'horizontal'
    columns?: number
    children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[]
}
export declare const List: ({
    children,
    direction,
    className,
    columns,
}: ListProps) => JSX.Element
