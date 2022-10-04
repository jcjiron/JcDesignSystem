import classNames from 'classnames';
import * as React from 'react';
import styled from 'styled-components';
import { useTabContext } from './tab-context';

export interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Unique identifier for this tab.
   */
  label: React.ReactNode;
  tabKey: string;
  children: React.ReactNode;
}

const Container = styled.div`
  @keyframes active {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.active {
    animation: active 0.3s ease-in-out;
  }
`;

export const Panel: React.FC<IPanelProps> = ({
  children,
  tabKey,
  className,
  ...props
}: IPanelProps) => {
  const { activeTab, mountOnEnter } = useTabContext();

  if (mountOnEnter && activeTab !== tabKey) {
    return null;
  }

  return (
    <Container
      {...props}
      className={classNames(
        activeTab === tabKey ? 'active' : 'd-none',
        className
      )}
    >
      {children}
    </Container>
  );
};