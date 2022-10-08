import { ReactElement } from 'react'
import { ListItemProps } from './../../../list/item'
import { ButtonProps } from '../../../button/index'
export declare type MainFeatureItemProps = {
    actionButton?: ReactElement<ButtonProps>
    onActionClick?: () => void
} & ListItemProps
export declare const MainFeatureItem: ({
    children,
    bulletIcon,
    subTitle,
    title,
    actionButton,
    onActionClick,
    onClick,
}: MainFeatureItemProps) => JSX.Element
