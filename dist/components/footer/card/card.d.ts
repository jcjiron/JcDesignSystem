import { ReactElement } from 'react'
import '../../../../assets/styles/bootstrap/card.scss'
export declare type CardProps = {
    children: ReactElement
    className?: string
}
export declare const Card: ({ children, className }: CardProps) => JSX.Element
