import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CardDates } from '.';
import { CardDatesProps } from './card-dates';

export default {
  title: 'Example/CardDates',
  component: CardDates,
} as Meta;

const Template: Story = ({ children, ...args }: CardDatesProps) => (
  <CardDates {...args}>{children}</CardDates>
);

export const Dark = Template.bind({});
export const Light = Template.bind({});

Dark.args = {
  variant: 'dark',
  children: 'May 07 - May 17',
  moreOptions: '+ days',
};

Light.args = {
  variant: 'light',
  children: 'May 07 - May 17',
};
