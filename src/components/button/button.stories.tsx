import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from './';
import { Icon } from '../icon';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Label',
  size: 'lg',
  outline: false,
  shape: 'circle',
  disabled: false,
} as ButtonProps;

export const Transparent = Template.bind({});

Transparent.args = {
  variant: 'transparent',
  children: 'Label',
} as ButtonProps;

export const Square = Template.bind({});

Square.args = {
  variant: 'primary',
  children: 'Label',
  size: 'lg',
  outline: false,
  shape: 'square',
} as ButtonProps;

export const IconButton = Template.bind({});
export const IconButtonWithText = Template.bind({});

IconButton.args = {
  variant: 'primary',
  shape: 'circle',
  icon: <Icon variant="icon-Search" />,
  size: 'lg',
  outline: false,
} as ButtonProps;

IconButtonWithText.args = {
  variant: 'primary',
  icon: <Icon variant="icon-Search" />,
  children: 'Label',
  size: 'lg',
  outline: false,
  shape: 'circle',
} as ButtonProps;

export const LinkButton = ({ children, ...args }: ButtonProps) => (
  <p>
    <Button {...args}>{children}</Button> is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. It has survived not only five
    centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s with the release of
    Letraset sheets containing Lorem Ipsum passages, and more recently with
    desktop publishing software like Aldus PageMaker including versions of Lorem
    Ipsum.
  </p>
);
LinkButton.args = {
  variant: 'inline-link',
  children: 'Lorem Ipsum',
} as ButtonProps;
