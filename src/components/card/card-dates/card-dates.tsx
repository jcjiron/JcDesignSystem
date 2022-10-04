import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export type CardDatesProps = {
  variant?: 'dark' | 'light';
  children: string;
  moreOptions: string;
};

const StyledCardDates = styled.div`
  overflow: hidden;
  display: flex;
  .label {
    background-color: var(--truewhite);
    color: var(--primary-800);
    border-radius: 4px;
    border: 1px solid var(--neutral-200);
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 12px;
    line-height: 22px;
    font-weight: 500;
    padding: 0 0 0 8px;
    .more-options {
      background: var(--neutral-100);
      border-radius: 0px 4px 4px 0;
      color: var(--neutral-400);
      padding: 0 8px 0 8px;
      margin-left:  8px;
    }
  }
`;

export const CardDates = ({
  variant,
  children,
  moreOptions,
}: CardDatesProps) => {
  return (
    <StyledCardDates className={`${variant}`}>
      <div className="label">
        <span>{children}</span>
        <div className="more-options">
          <span>{moreOptions}</span>
        </div>
      </div>
    </StyledCardDates>
  );
};

export default CardDates;
