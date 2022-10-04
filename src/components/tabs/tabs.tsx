import React from 'react';
import { IPanelProps, Panel } from './panel';
import { TabsContext } from './tab-context';
import { TabHeader } from './TabHeader';
import parseTabList from './utils/parseTabList';

export type TabsProps = {
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

type ControlledState = {
  activeTab: string;
  onTabChange?: (tab: string) => void;
};

export const Tabs: React.FC<TabsProps> & ITabsComposition = ({
  defaultActiveKey,
  children,
  className,
  mountOnEnter = true,
  ...props
}: TabsProps) => {
  const [activeTab, onTabChange] = React.useState(defaultActiveKey);
  const tabs = parseTabList(children);

  const isControlled = (prop: string) => {
    return props[prop] !== undefined;
  };

  const getState = (): ControlledState => {
    const state: ControlledState = {
      onTabChange,
      activeTab,
    };
    return Object.entries(state).reduce((combinedState, [key, value]) => {
      if (isControlled(key)) {
        combinedState[key] = props[key];
      } else {
        combinedState[key] = value;
      }
      return combinedState;
    }, {}) as ControlledState;
  };

  return (
    <TabsContext.Provider
      value={{
        activeTab: getState().activeTab,
        setActiveTab: getState().onTabChange,
        mountOnEnter,
      }}
    >
      <TabHeader tabs={tabs} className={className} />
      {children}
    </TabsContext.Provider>
  );
};

Tabs.Panel = Panel;