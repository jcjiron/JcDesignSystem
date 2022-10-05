import * as React from 'react';
export interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Unique identifier for this tab.
     */
    label: React.ReactNode;
    tabKey: string;
    children: React.ReactNode;
}
export declare const Panel: React.FC<IPanelProps>;
