import React from 'react';

import styled from 'styled-components';
import { customScrollBar } from '../scroll-bar';
import { ScrollableColumn, ScrollableColumnProps } from './scrollable-column';
import { StaticColumn, StaticColumnProps } from './static-column';

export type TwoColumnsLayoutProps = React.ComponentPropsWithoutRef<'div'>;

type TwoColumnsLayoutComposition = {
  StaticColumn: React.FC<StaticColumnProps>;
  ScrollableColumn: React.FC<ScrollableColumnProps>;
};

const Container = styled.div`
  overflow: auto;
  height: 100%;
  ${customScrollBar}
  &.row {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const TwoColumnsLayout: React.FC<TwoColumnsLayoutProps> &
  TwoColumnsLayoutComposition = ({
  className,
  ...props
}: TwoColumnsLayoutProps) => {
  return <Container {...props} className={`row ${className}`} />;
};

TwoColumnsLayout.StaticColumn = StaticColumn;
TwoColumnsLayout.ScrollableColumn = ScrollableColumn;
