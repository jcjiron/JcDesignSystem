import React, { ReactNode } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export type CardLocationProps = {
  variant?: 'dark' | 'light';
  children: ReactNode;
}

const StyledCardLocation = styled.div`
&.dark {
  span {
      color: var(--neutral-100);
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
  }
}
&.light {
  span {
      color: var(--primary-800);
      font-size: 16px;
      line-height: 22px;
      font-weight: 500;
  }
}
`;

export const CardLocation = ({
  variant,
  children
}: CardLocationProps) => {
  return (
    <StyledCardLocation className={`${variant}`}>
      <span>
        {children}
      </span>
    </StyledCardLocation>
  );
}

export default CardLocation;
