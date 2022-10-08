import React from 'react'
import { CollapsibleBodyProps } from './collapsible-body'
import { CollapsibleHeaderProps } from './collapsible-header'
export declare type CollapsibleProps = {
    children?: React.ReactNode
    className?: string
    isOpen?: boolean
    onToggle?: () => void
}
interface ICollapsibleComposition {
    Body: React.FC<CollapsibleBodyProps>
    Header: React.FC<CollapsibleHeaderProps>
}
export declare const Collapsible: React.FC<CollapsibleProps> &
    ICollapsibleComposition
export {}
