import React from 'react';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import styled from 'styled-components';
import Button from '../button';
import { Icon } from '../icon';

const ArrowContainer = styled.div<{ disabled: boolean }>`
  position: absolute;
  top: 0;

  width: 100px;
  height: 100%;

  display: none;
  align-items: center;
  justify-content: center;

  transition: opacity 200ms ease-in;
  opacity: ${({ disabled }) => (disabled ? 0 : 1)};
  z-index: 2;

  &.right-arrow {
    right: 0;
  }
  &.left-arrow {
    left: 0;
  }
  /* mouse, touch pad */
  @media (hover: hover) and (pointer: fine) {
    display: flex;
  }
  /* Desktop */
  @media (min-width: 992px) {
    &.gradient {
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.9) 100%
      );
    }
  }
`;

const Arrow = styled(Button)`
  --button-size: 40px;

  &.btn {
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
    color: rgba(0, 0, 0, 1);
    &.btn-circle {
      width: var(--button-size);
      height: var(--button-size);
    }
  }
  &.btn:focus {
    color: rgba(0, 0, 0, 1);
    background: #f8f9fa;
  }
  &.btn:hover {
    color: rgba(0, 0, 0, 1);
    background: #f8f9fa;
  }
  &.btn:disabled {
    display: none !important;
  }
`;

export const LeftArrow = () => {
  const {
    getPrevItem,
    isFirstItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
    initComplete,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    const prevItem = getPrevItem();
    scrollToItem(prevItem?.entry?.target, 'smooth', 'start');
  };

  return (
    <ArrowContainer className="left-arrow" disabled={disabled}>
      <Arrow
        variant="light"
        shape="circle"
        icon={<Icon variant="icon-Chevron-Left" />}
        onClick={clickHandler}
      />
    </ArrowContainer>
  );
};

export const RightArrow = () => {
  const {
    getNextItem,
    isLastItemVisible,
    scrollToItem,
    visibleItemsWithoutSeparators,
  } = React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  const clickHandler = () => {
    const nextItem = getNextItem();
    scrollToItem(nextItem?.entry?.target, 'smooth', 'end');
  };

  return (
    <ArrowContainer className="right-arrow gradient" disabled={disabled}>
      <Arrow
        variant="light"
        shape="circle"
        icon={<Icon variant="icon-Chevron-Right" />}
        onClick={clickHandler}
      />
    </ArrowContainer>
  );
};
