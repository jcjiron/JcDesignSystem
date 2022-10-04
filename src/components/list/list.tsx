import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Default as DefaultText } from '../typography/text-styles';
import '../../../assets/styles/bootstrap/list-group.scss';
import { ListItemProps } from './item';

export interface ListProps {
  className?: string;
  direction?: 'vertical' | 'horizontal';
  columns?: number;
  children: ReactElement<ListItemProps> | ReactElement<ListItemProps>[];
}

const Ul = styled.ul<{ columns?: number }>`
  ${DefaultText}
  &.direction-horizontal {
    flex-direction: row !important;
    flex-wrap: wrap;
    li {
      margin: 0 1rem 0 0;
      ${(props) => `flex-basis: calc(100% / ${props.columns || '1'} );`}
      margin-right: 0px;
    }
  }
`;

export const List = ({
  children,
  direction = 'vertical',
  className = '',
  columns = 1,
}: ListProps) => {
  return (
    <Ul
      columns={columns}
      className={`list-group direction-${direction} ${className}`}
    >
      {children}
    </Ul>
  );
};
