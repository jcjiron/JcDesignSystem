import React from 'react';
import styled from 'styled-components';
import { IPanelProps } from './panel';
import { useTabContext } from './tab-context';

type TabHeaderProps = {
  tabs: IPanelProps[];
  className?: string;
};

const Container = styled.div`
  &.tabs-header-container {
    justify-content: space-between;
    overflow-x: auto;
    width: 100%;
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) {
    }
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) {
      justify-content: initial;
    }
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
    }
  }
`;

const TabButton = styled.button`
  --primary-color: black;
  --border-color: #c4c4c4;
  --border-height: 2px;
  --font-size: 13px;
  --padding: 8px 18px;
  /* small mobile devices */
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  font-weight: 400;
  font-size: var(--font-size);
  color: var(--primary-color);
  padding: var(--padding);
  border: none;
  border-bottom: var(--border-height) solid var(--border-color);
  &.selected {
    --primary-color: #8b6fc9;
    --border-color: #8b6fc9;
    --border-height: 2px;
    font-weight: 600;
  }
  &:hover {
    color: rgba(168, 147, 214, 1);
  }
  /* Mobile */
  @media (min-width: 361px) {
    --font-size: 14px;
    --padding: 8px 24px;
  }
  /* Tablet */
  @media (min-width: 768px) {
    width: auto;
    --font-size: 16px;
  }
  /* Desktop */
  @media (min-width: 992px) {
    --font-size: 20px;
  }
`;

export const TabHeader: React.FC<TabHeaderProps> = ({
  tabs,
  className,
}: TabHeaderProps) => {
  const { activeTab, setActiveTab } = useTabContext();

  return (
    <Container className={`d-flex tabs-header-container ${className}`}>
      {tabs.map((tab) => {
        const isSelected = activeTab === tab.tabKey;
        return (
          <TabButton
            className={isSelected ? 'selected' : ''}
            key={tab.tabKey}
            onClick={() => setActiveTab(tab.tabKey)}
          >
            {tab.label}
          </TabButton>
        );
      })}
    </Container>
  );
};