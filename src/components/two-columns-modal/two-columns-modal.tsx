import React from 'react';
import styled from 'styled-components';
import {
  ModalWithNavigation,
  ModalWithNavigationProps,
} from '../modal-with-navigation';
import { TwoColumnsLayout } from '../two-columns-layout';

/* eslint-disable-next-line */
export type TwoColumnsModalProps = {
  staticColumn: React.ReactNode;
  scrollableColumn: React.ReactNode;
} & ModalWithNavigationProps;

const StyledModal = styled(ModalWithNavigation)`
  --padding-y: 16px;
  .children-container {
    height: calc(100% - 64px);
  }
  .padding-y {
    padding-top: var(--padding-y);
    padding-bottom: var(--padding-y);
  }
  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    --padding-y: 32px;
  }
`;

export function TwoColumnsModal({
  staticColumn,
  scrollableColumn,
  variant = 'light',
  ...modalProps
}: TwoColumnsModalProps) {
  return (
    <StyledModal {...modalProps} variant={variant}>
      <TwoColumnsLayout className="container h-100">
        <TwoColumnsLayout.StaticColumn className="padding-y">
          {staticColumn}
        </TwoColumnsLayout.StaticColumn>
        <TwoColumnsLayout.ScrollableColumn className="padding-y">
          {scrollableColumn}
        </TwoColumnsLayout.ScrollableColumn>
      </TwoColumnsLayout>
    </StyledModal>
  );
}

export default TwoColumnsModal;
