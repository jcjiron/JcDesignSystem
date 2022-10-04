import '../../../assets/styles/bootstrap/close-button.scss';
import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Icon } from '../icon';
import styled from 'styled-components';

const Button = styled.button`
  float: right;
  font-size: 12px;
  font-weight: 700;
  text-shadow: inherit;
  line-height: 2;
  &:not(:disabled):not(.disabled) {
    opacity: 1;
  }
  &:focus{
    outline-width: 0px;
  }
`;

export type CloseButtonProps = {
  children?: ReactNode;
} & ComponentPropsWithoutRef<'button'>;
export const CloseButton = ({ children, className = '', ...props }: CloseButtonProps) => {
  return (
    <Button {...props} className={`close ${className}`} aria-label="Close">
      {children !== undefined ? children : <Icon variant="icon-Close" />}
    </Button>
  );
};
