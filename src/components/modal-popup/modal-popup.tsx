import React from 'react';
import styled from 'styled-components';
import { ScreenSize } from '../hooks/use-screen-size/use-screen-size';
import {
  ModalCenteredDialog,
  ModalCenteredDialogProps,
} from '../modal-dialog-centered/modal-centered-dialog';
import { use100vh } from '../div-100vh';
import { customScrollBar } from '../scroll-bar';

const ModalCenteredDialogStyled = styled(ModalCenteredDialog)`
  --desktop-max-height: 630px;
  --desktop-min-height: 434px;
  --tablet-horizontal-padding: 78px;
  --desktop-max-width: 700px;
  --action-bar-height: 60px;
  --modal-vertical-marging: 30px; /*min padding between modal and browser screen*/

  .modal-content {
    min-height: calc(var(--action-bar-height) + var(--modal-vertical-marging));
    height: ${(props) => {
      return props['data-height'] !== undefined
        ? `${props['data-height']}px`
        : '100vh';
    }};
    width: 100vw;
    .modal-header {
      min-height: var(--action-bar-height);
      display: flex;
      flex-direction: row-reverse;
      .close {
        order: 2;
      }
      .action-bar-container {
        order: 1;
      }
    }
    .modal-body {
      flex: 1 1 auto;
      & > * {
        /* :: Custom scroll bar :: */
        ${customScrollBar}
      }
    }
    @media (min-height: 434px) {
      min-height: var(--desktop-min-height);
    }
  }
  .shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%) !important;
  }

  @media (min-width: ${ScreenSize.SMALL}px) {
    .modal-content {
      height: calc(
        ${(props) => {
            return props['data-height'] !== undefined
              ? `${props['data-height']}px`
              : '100vh';
          }} - var(--modal-vertical-marging)
      );
      max-height: var(--desktop-max-height);
      width: calc(100vw - var(--tablet-horizontal-padding));
    }

    .shadow-sm {
      box-shadow: none !important;
    }
  }

  @media (min-width: ${ScreenSize.LARGE}px) {
    .modal-content {
      width: var(--desktop-max-width);
      max-width: var(--desktop-max-width);
    }
  }
`;

export type ModalPopupProps = Pick<
  ModalCenteredDialogProps,
  | 'actionBar'
  | 'children'
  | 'closeModal'
  | 'show'
  | 'className'
  | 'mergeHeaderWithContent'
>;

export const ModalPopup = ({ actionBar, ...props }: ModalPopupProps) => {
  const height = use100vh();
  return (
    <ModalCenteredDialogStyled
      {...props}
      actionBar={actionBar}
      animate={true}
      variant="light"
      data-height={height}
    />
  );
};
