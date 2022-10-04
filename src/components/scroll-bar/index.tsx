import { css } from 'styled-components';

export const customScrollBar = css`
  --track-background: transparent;
  --handle-background: rgba(196, 196, 196, 0.7);
  --handle-hover-background: rgba(196, 196, 196, 0.7);
  /* :: Custom scroll bar :: */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--track-background, transparent);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--handle-background, rgba(196, 196, 196, 0.7));
    border-radius: 4px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--handle-hover-background, rgba(196, 196, 196, 0.7));
  }
`;
