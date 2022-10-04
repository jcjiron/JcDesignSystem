import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { IconProps } from '../icon';


const Item = styled.li`
  background-color: transparent;
  border-width: 0px;

  .item-header {
    font-size: 18px;
    font-weight: 600;
  }

  .item-subheader {
    color: var(--paragraph-color);
    font-size: 12px;
    font-style: italic;
    font-weight: 400;
  }
`;

export interface ListItemProps {
  bulletIcon?: ReactElement<IconProps>;
  className?: string;
  children?: string | ReactNode;
  title?: string | ReactNode;
  subTitle?: string | ReactNode;
  onClick?: () => void;
}

export const ListItem = ({
  bulletIcon,
  className = '',
  children,
  title,
  subTitle,
  onClick,
}: ListItemProps) => {
  return (
    <Item
      className={`list-group-item d-flex p-0 ${className} my-2`}
      onClick={onClick}
    >
      {bulletIcon && <div className="bullet pt-1 pr-3">{bulletIcon}</div>}
      <div className="flex-grow-1">
        {title && (
          <div className="mb-1">
            <h3 className="mb-0 item-header">{title}</h3>
            {subTitle && <small className="item-subheader">{subTitle}</small>}
          </div>
        )}
        {typeof children === 'string' ? (
          <p className="mb-1">{children}</p>
        ) : (
          <div className="mb-1">{children}</div>
        )}
      </div>
    </Item>
  );
};
