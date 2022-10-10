import React from 'react';
export declare type TabsContextType = {
    activeTab: string;
    setActiveTab: (label: string) => void;
    mountOnEnter?: boolean;
};
export declare const TabsContext: React.Context<TabsContextType>;
export declare function useTabContext(): TabsContextType;
