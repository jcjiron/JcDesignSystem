import React from 'react';
import '../../../assets/styles/bootstrap/button.scss';
import styled from 'styled-components';
import { IconProps } from '../icon';
import classNames from 'classnames';
import { Default } from '../typography/text-styles';

const StyledButton = styled.button`
  &.btn {
    /* default font size */
    ${Default}
    width: 170px;
    height: 50px;
    padding: 0px 20px;
    border-radius: 50px;
    text-decoration: none;
    &:focus,
    &:active {
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }
  }
  &.btn-primary {
    font-weight: 600;
    color: #fff;
    &:focus,
    &:active {
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }
    &:disabled,
    &:disabled:hover {
      background: rgba(0, 0, 0, 0.25);
      color: #fff;
      border: none;
    }
  }
  &.btn-neutral {
    outline: 0 !important;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: white;
    padding: 10px 40px;
    display: block;
    &:focus,
    &:hover,
    &:active {
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
      background-color: white !important;
      border: 1px solid rgba(0, 0, 0, 0.15) !important;
    }
  }

  &.btn-inline-link {
    font-weight: 400;
    color: var(--primary);
    width: inherit;
    height: inherit;
    padding: 0;
    text-decoration: none;
    display: inline-block !important;
    &:hover {
      text-decoration: underline;
    }
    &:focus,
    &:active {
      text-decoration: underline;
      color: var(--primary-darker);
      -webkit-box-shadow: none !important;
      -moz-box-shadow: none !important;
      box-shadow: none !important;
    }
  }

  &.btn.btn-circle {
    padding: 0px;
    border-radius: 50%;
    height: 48px;
    width: 48px;
  }
  &.btn-transparent {
    border: none;
    background: transparent;
    padding: 0px;
    height: fit-content;
    width: fit-content;
    border-radius: 0;
    &.btn:focus,
    &.btn:active {
      transform: scale(1);
    }
  }
  &.btn-square,
  &.btn-square:focus {
    &.btn.btn-primary {
      background: white;
      border: 1px solid rgba(0, 0, 0, 0.15);
    }
    color: rgba(0, 0, 0, 1);
    padding: 0;
    font-weight: 500;
    border-radius: 6px;
    &.btn:hover,
    &.btn:active {
      color: rgba(0, 0, 0, 1);
      background: rgba(139, 111, 201, 0.1);
      border: 1px solid #8b6fc9;
    }
  }
`;
export type ButtonProps = {
  className?: string;
  variant?:
    | 'primary'
    | 'secondary'
    | 'light'
    | 'link'
    | 'inline-link'
    | 'warning'
    | 'neutral'
    | 'danger'
    | 'transparent';
  size?: 'lg' | 'sm' | undefined;
  children?: React.ReactNode;
  outline?: boolean;
  readonly?: boolean;
  shape?: 'circle' | 'round' | 'square';
  icon?: React.ReactElement<IconProps>;
  refer?: React.Ref<HTMLButtonElement>;
  disabled?: boolean;
} & React.ComponentPropsWithoutRef<'button'>;

export const Button = ({
  className = '',
  variant = 'primary',
  size = undefined,
  children,
  outline = false,
  readonly = false,
  shape = 'round',
  icon,
  refer: ref,
  ...props
}: ButtonProps) => {
  const getButtonClasses = () => {
    const isIconButton = icon && !children;
    const btnClass = classNames([
      'btn',
      {
        'btn-outline': outline,
        [`btn-${variant}`]: variant,
        'd-flex align-items-center justify-content-center': true,
        [`btn-${size}`]: size,
        [`btn-circle text-center p-0'`]: shape === 'circle' && isIconButton,
        'btn-square': shape === 'square',
      },
      className,
    ]);
    return btnClass;
  };

  const classes = getButtonClasses();
  return (
    <StyledButton className={classes} disabled={readonly} ref={ref} {...props}>
      {icon ? icon : null}
      <span className={icon && children ? 'ml-2' : ''}>{children}</span>
    </StyledButton>
  );
};

export default Button;
