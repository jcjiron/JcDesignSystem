import { Modal, ModalProps } from '../modal/index';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { CloseButton } from '../button-close/close-button';
import styled from 'styled-components';

const Div = styled.div`  
  .modal-content {
    background-color: #fff;
    &.header-merged {
      .modal-header{
        z-index: 999;
      }
      .modal-body {
        margin-top: -60px;
        
      }
    }
    &.dark {
      background-color: var(--dark-bg);
      color: white;
      .close {
        color: white;
      }
    }
  }
  .modal-header {
    height: 60px;
    justify-content: flex-end;
    align-items: center;
    border-bottom-width: 0px;
  }
  .close {
    margin: 0px;
  }
`;

export type ModalCenteredDialogProps = {
  closeModal?: () => void;
  variant: 'dark' | 'light';
  actionBar?: ReactNode;
  mergeHeaderWithContent?: boolean;
} & ModalProps;

export const ModalCenteredDialog = ({
  children,
  closeModal,
  show,
  className = '',
  animate,
  variant,
  actionBar,
  mergeHeaderWithContent = false,
}: ModalCenteredDialogProps & ComponentPropsWithoutRef<'div'>) => {
  return (
    <Modal
      show={show}
      animate={animate}
      className="d-flex align-items-center justify-content-center"
    >
      <Div className={`${className}`} role="document">
        <div
          className={`modal-content border-0 
          ${mergeHeaderWithContent ? 'header-merged' : ''}
          ${variant !== undefined ? variant : ''}`}
        >
          <div className={`modal-header p-0 ${!mergeHeaderWithContent && 'shadow-sm'}`}>
            <CloseButton onClick={closeModal} /><div className="action-bar-container">{actionBar}</div>
          </div>
          <div className="modal-body p-0">{children}</div>
        </div>
      </Div>
    </Modal>
  );
};
