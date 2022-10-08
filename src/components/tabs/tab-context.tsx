import React from 'react'

export type TabsContextType = {
    activeTab: string
    setActiveTab: (label: string) => void
    mountOnEnter?: boolean
}

export const TabsContext = React.createContext<TabsContextType | undefined>(
    undefined
)

export function useTabContext() {
    const context = React.useContext(TabsContext)
    if (!context) {
        throw new Error(
            `Tabs compound components cannot be rendered outside the Tabs component`
        )
    }
    return context
}
