import React from 'react'
import { IPanelProps } from '../panel'
import toArray from './toArray'

export default function parseTabList(children: React.ReactNode): IPanelProps[] {
    return toArray(children)
        .map((node: React.ReactElement<IPanelProps>) => {
            if (React.isValidElement(node)) {
                return {
                    ...node.props,
                }
            }
            return null
        })
        .filter((tab) => tab)
}
