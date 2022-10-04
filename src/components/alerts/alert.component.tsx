import React, { ComponentPropsWithRef, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { CloseButton } from '../button-close/close-button';
import { getContrastYIQ } from '../utils/get-contrast-YIQ';
import '../../../assets/styles/bootstrap/alerts.scss';



const Div = styled.div<{ backgroundColor?: string }>`
  border-color: transparent;

  &.alert-primary {
    background-color: var(--primary);
    color: var(--truewhite);
  }
  &.alert-custom {
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) =>
      props.backgroundColor !== '' && getContrastYIQ(props.backgroundColor)};
  }
  .close {
    color: #000000;
    &:not(:disabled):not(.disabled) {
      color: white;
      opacity: 1;
    }
  }
  &.dismissed {
    display: none;
  }
  &.shadow-sm {
    box-shadow: 0 2px 2px rgb(0 0 0 / 20%) !important;
  }
`;

export type AlertProps = {
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'custom';
  children: ReactNode;
  isDismissable?: boolean;
  handleDismiss?: () => void;
  isDismissed?: boolean;
  backgroundColor?: string;
} & ComponentPropsWithRef<'div'>;

export const StatefulAlert = ({
  children,
  variant,
  handleDismiss,
  isDismissed,
  isDismissable = false,
  className = '',
  backgroundColor = '',
  ...props
}: AlertProps) => {
  return (
    <Div
      className={`border-0 alert ${
        isDismissable ? 'alert-dismissible ' : ''
      } alert-${variant} ${
        isDismissed ? 'dismissed' : ''
      }  ${className} shadow-sm`}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
      {isDismissable && (
        <CloseButton
          onClick={handleDismiss}
          style={{ color: getContrastYIQ(backgroundColor) }}
        />
      )}
    </Div>
  );
};

export const Alert = ({ ...props }: AlertProps) => {
  const [isDismissed, setDismiss] = useState(false);
  const handleDismiss = () => {
    setDismiss(!isDismissed);
  };
  return (
    <StatefulAlert
      {...props}
      isDismissed={isDismissed}
      handleDismiss={handleDismiss}
    />
  );
};
