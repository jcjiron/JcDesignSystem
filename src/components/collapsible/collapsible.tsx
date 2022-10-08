import React from 'react'
import { CollapsibleBodyProps, CollapsibleBody } from './collapsible-body'
import { CollapsibleContext } from './collapsible-context'
import { CollapsibleHeader, CollapsibleHeaderProps } from './collapsible-header'

export type CollapsibleProps = {
    children?: React.ReactNode
    className?: string
    isOpen?: boolean
    onToggle?: () => void
}

// This is the state that can be controlled by the component or by the parent
type ControlledState = {
    isOpen: boolean
    onToggle?: () => void
}

interface ICollapsibleComposition {
    Body: React.FC<CollapsibleBodyProps>
    Header: React.FC<CollapsibleHeaderProps>
}

export const Collapsible: React.FC<CollapsibleProps> &
    ICollapsibleComposition = ({ children, ...props }: CollapsibleProps) => {
    const [isOpen, setIsOpen] = React.useState(false)

    const isControlled = (prop: string) => {
        return props[prop] !== undefined
    }

    const getState = (): ControlledState => {
        const state: ControlledState = {
            isOpen,
            onToggle,
        }
        return Object.entries(state).reduce((combinedState, [key, value]) => {
            if (isControlled(key)) {
                combinedState[key] = props[key]
            } else {
                combinedState[key] = value
            }
            return combinedState
        }, {}) as ControlledState
    }

    const onToggle = () => setIsOpen((v) => !v)

    return (
        <CollapsibleContext.Provider
            value={{ isOpen: getState().isOpen, onToggle: getState().onToggle }}
        >
            {children}
        </CollapsibleContext.Provider>
    )
}

Collapsible.Body = CollapsibleBody
Collapsible.Header = CollapsibleHeader
