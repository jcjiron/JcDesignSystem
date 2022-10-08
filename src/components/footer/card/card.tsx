import React from 'react'
import { ReactElement } from 'react'
import '../../../../assets/styles/bootstrap/card.scss'
export type CardProps = {
    children: ReactElement
    className?: string
}

export const Card = ({ children, className = '' }: CardProps) => {
    return <div className={`card ${className}`}>{children}</div>
}
