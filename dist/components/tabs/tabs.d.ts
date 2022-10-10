import React from 'react';
import { IPanelProps } from './panel';
export declare type TabsProps = {
    defaultActiveKey: string;
    children?: React.ReactNode;
    className?: string;
    activeTab?: string;
    onTabChange?: (tab: string) => void;
    mountOnEnter?: boolean;
};
interface ITabsComposition {
    Panel: React.FC<IPanelProps>;
}
export declare const Tabs: React.FC<TabsProps> & ITabsComposition;
export {};
