import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UnitCardPriceItem, UnitCardPriceItemProps } from './';

export default {
  title: 'Example/UnitCard Price',
  component: UnitCardPriceItem,
} as Meta;

const Template: Story<UnitCardPriceItemProps> = ({ ...args }: UnitCardPriceItemProps) => (
  <UnitCardPriceItem {...args}></UnitCardPriceItem>
);

export const Horizontal = Template.bind({});
export const Vertical = Template.bind({});

Horizontal.args = {
  orientation: 'horizontal',
  stagingTitle: 'Staging',
  pricePerNight: 217,
  priceTitle: 'Night',
};

Vertical.args = {
  orientation: 'vertical',
  stagingTitle: 'Staging',
  pricePerNight: 217,
  priceTitle: 'Night',
};
