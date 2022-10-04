import React from 'react';
import styled from 'styled-components';

export type TruncatedTextProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType;
  numberOfLines: number;
  wordBreak?: 'break-all' | 'normal';
} & React.HTMLAttributes<HTMLOrSVGElement>;

const StyledTruncatedText = styled.div<{
  lines: number;
  wordBreak: 'break-all' | 'normal';
}>`
  -webkit-line-clamp: ${(props) => props.lines};
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  word-break: ${(props) => props.wordBreak};
`;

export const TruncatedText: React.FC<TruncatedTextProps> = ({
  as = 'p',
  numberOfLines,
  wordBreak = 'normal',
  ...props
}: TruncatedTextProps) => {
  return (
    <StyledTruncatedText
      as={as}
      lines={numberOfLines}
      wordBreak={wordBreak}
      {...props}
    ></StyledTruncatedText>
  );
};
