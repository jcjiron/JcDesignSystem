import React from 'react';
import styled from 'styled-components';

export type SliderItemProps = {
  children: React.ReactNode;
  className?: string;
  itemId: string; // this is prop is not used on the component but it's required by react-horizontal-scrolling-menu
};

const Item = styled.div``;

export const SliderItem: React.FC<SliderItemProps> = ({
  children,
  className = '',
}: SliderItemProps) => {
  return <Item className={className}>{children}</Item>;
};
