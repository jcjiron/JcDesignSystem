import React, { ReactNode } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { ScreenSize } from '../hooks/use-screen-size/use-screen-size';
import { use100vh } from '../div-100vh';

const ScrollableDiv = styled.div`
  --modal-vertical-padding: 10px;
  --mobile-content-size: calc(
    ${(props) => {
        return props['data-height'] !== undefined
          ? `${props['data-height']}px`
          : '100vh';
      }} - var(--action-bar-height) - var(--modal-vertical-padding)
  );
  overflow: scroll;
  min-height: var(--action-bar-height);
  height: var(--mobile-content-size);
  @media (min-width: ${ScreenSize.SMALL}px) {
    --desktop-content-size: calc(
      var(--action-bar-height) + var(--modal-vertical-marging) +
        var(--modal-vertical-padding)
    );
    height: calc(
      ${(props) => {
          return props['data-height'] !== undefined
            ? `${props['data-height']}px`
            : '100vh';
        }} - var(--desktop-content-size)
    );
    @media (min-height: 630px) {
      --desktop-content-size: calc(
        var(--action-bar-height) + var(--modal-vertical-padding)
      );
      height: calc(var(--desktop-max-height) - var(--desktop-content-size));
    }
  }
`;
export const ModalScrollableContent = (props: {
  children: ReactNode;
  className: string;
  style?: CSSProperties;
}) => {
  const height = use100vh();
  return <ScrollableDiv data-height={height} {...props} />;
};
