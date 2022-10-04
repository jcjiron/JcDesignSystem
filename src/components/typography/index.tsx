import React from 'react';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import {
  SectionTitle,
  SectionHeader,
  SubSectionHeader,
  SubSectionSubHeader,
  Title,
  Default,
  Small,
  TypographyStyles,
} from './text-styles';

export { TypographyStyles } from './text-styles';

const HeaderStyles = css`
  &.h1 {
    ${SectionTitle}
  }
  &.h2 {
    ${SectionHeader}
  }
  &.h3 {
    ${SubSectionHeader}
  }
  &.h4 {
    ${SubSectionSubHeader}
  }
  &.h5 {
    ${Title}
  }
`;

export interface HeadingProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: ReactNode;
  className?: string;
}

const HeadingComponent = ({ children, className, variant }: HeadingProps) =>
  React.createElement(
    variant,
    { className: `${className} ${variant}` },
    children
  );

const StyledHeadingComponent = styled(HeadingComponent)`
  ${HeaderStyles}
`;

export const Heading = (args: HeadingProps) => (
  <StyledHeadingComponent {...args} />
);

const TextStyles = css`
  ${Default}
  &.small {
    ${Small}
  }
`;

export interface TextProps {
  variant?: 'paragraph' | 'span';
  size?: 'normal' | 'small';
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TextComponent = ({
  children,
  className = '',
  variant = 'paragraph',
  size = 'normal',
  style,
}: TextProps) =>
  React.createElement(
    variant === 'paragraph' ? 'p' : variant,
    { className: `${className} ${size}`, style },
    children
  );

const StyledTextComponent = styled(TextComponent)`
  ${TextStyles}
`;

export const Text = (args: TextProps) => <StyledTextComponent {...args} />;

const Container = styled.div`
  ${TypographyStyles}
`;

export type TypographyContainerProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType;
} & React.HTMLAttributes<HTMLOrSVGElement>;

export const TypographyContainer: React.FC<TypographyContainerProps> = ({
  as = 'div',
  ...props
}: TypographyContainerProps) => {
  return <Container as={as} {...props} />;
};
