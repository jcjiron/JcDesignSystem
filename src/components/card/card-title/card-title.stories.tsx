import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardTitle } from '.';

export default {
  title: 'Example/CardTitle',
  component: CardTitle,
} as Meta;

const Template: Story = ({ children, ...args }) => (
  <CardTitle {...args}>{children}</CardTitle>
);

export const Dark = Template.bind({});
export const Light = Template.bind({});

Dark.args = {
  variant: 'dark',
  children: 'Serpiente Sunny Hideaway'
};

Light.args = {
  variant: 'light',
  children: 'Serpiente Sunny Hideaway'
};
