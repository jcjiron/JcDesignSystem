import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Icon, IconProps } from '../icon';
import { Modal, ModalProps } from '../modal';
import { DropdownContainer } from '../dropdown-base/drop-down-container';

import { customScrollBar } from '../scroll-bar';
import { use100vh } from '../div-100vh';

const Div = styled(DropdownContainer)`
  --action-bar-height: 62px;
  overflow: auto;
  height: 100vh;
  /* :: Custom scroll bar :: */
  ${customScrollBar}
  .children-container {
    width: 100%;
    min-height: calc(100% - var(--action-bar-height));
    background: var(--dropdown-menu-bg, white);
  }
  .action-bar {
    max-height: var(--action-bar-height);
    z-index: 5;
    position: sticky;
    top: 0;
    left: 0;
    background: var(--dropdown-menu-bg, white);
    display: grid;
    grid-template-areas: 'go-back placeholder close';
    .go-back-icon {
      grid-area: go-back;
      font-weight: bold;
      cursor: pointer;
      font-weight: 100;
      font-size: 14px;
    }
    .placeholder {
      grid-area: placeholder;
      justify-self: center;
      font-weight: 500;
    }
    .close-icon {
      grid-area: close;
      font-weight: bold;
      cursor: pointer;
      justify-self: end;
    }
    & * {
      color: var(--dropdown-item-color);
      align-self: center;
    }
  }
`;

export type ModalWithNavigationProps = {
  onGoBack?: () => void;
  onClose?: () => void;
  title?: string;
  GoBackIcon?: ReactElement<IconProps>;
  CloseIcon?: ReactElement<IconProps>;
  variant?: 'dark' | 'light';
} & ModalProps;

export const ModalWithNavigation = ({
  show,
  animate = true,
  children,
  onClose,
  title,
  onGoBack,
  GoBackIcon,
  CloseIcon,
  variant,
  ...modalProps
}: ModalWithNavigationProps) => {
  const height = use100vh();
  return (
    <Modal show={show} animate={animate} {...modalProps}>
      <Div
        className={variant}
        style={{
          height: height,
        }}
      >
        <div className="p-4 action-bar shadow-sm ">
          {onGoBack &&
            (GoBackIcon !== undefined ? (
              React.cloneElement(GoBackIcon, {
                ...GoBackIcon.props,
                onClick: onGoBack,
                className: `${GoBackIcon.props.className} go-back-icon`,
              })
            ) : (
              <Icon
                variant="icon-Chevron-Left"
                className="go-back-icon"
                onClick={onGoBack}
              />
            ))}
          <span className="placeholder">{title}</span>
          {onClose &&
            (CloseIcon !== undefined ? (
              React.cloneElement(CloseIcon, {
                ...CloseIcon.props,
                onClick: onClose,
                className: `${CloseIcon.props.className} close-icon`,
              })
            ) : (
              <Icon
                variant="icon-close"
                className="close-icon"
                onClick={onClose}
              />
            ))}
        </div>
        <div
          className={`p-3 ${show ? 'd-block' : 'd-none'} children-container `}
          aria-labelledby="modalContent"
        >
          {children}
        </div>
      </Div>
    </Modal>
  );
};
