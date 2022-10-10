import React from 'react';
export declare type CollapsibleContextType = {
    isOpen: boolean;
    onToggle: () => void;
};
export declare const CollapsibleContext: React.Context<CollapsibleContextType>;
export declare function useCollapsibleContext(): CollapsibleContextType;
