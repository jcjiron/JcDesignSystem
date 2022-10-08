import { ReactNode } from 'react'
export declare type CardTitleProps = {
    variant?: 'dark' | 'light'
    children: ReactNode
}
export declare const CardTitle: ({
    variant,
    children,
}: CardTitleProps) => JSX.Element
export default CardTitle
