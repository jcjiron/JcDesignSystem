import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  AboutApartment,
  AboutApartmentProps,
  AboutApartmentProperty,
} from '.';
import { Icon } from '../../../icon/index';

export default {
  title: 'Example/AboutDepartment',
  component: AboutApartment,
} as Meta;

const Template: Story<AboutApartmentProps> = ({
  ...args
}: AboutApartmentProps) => <AboutApartment {...args} />;

export const Primary = Template.bind({});
const args = {
  icon: (
    <Icon variant="icon-Badge-Facebook">
      <span className="path1"></span>
      <span className="path2"></span>
    </Icon>
  ),
  properties: [
    <AboutApartmentProperty
      bulletIcon={<Icon variant="icon-Chevron-Right" />}
      key="1"
    >
      content
    </AboutApartmentProperty>,
    <AboutApartmentProperty
      bulletIcon={<Icon variant="icon-Chevron-Right" />}
      key="2"
    >
      content
    </AboutApartmentProperty>,
    <AboutApartmentProperty
      bulletIcon={<Icon variant="icon-Chevron-Right" />}
      key="3"
    >
      content
    </AboutApartmentProperty>,
    <AboutApartmentProperty
      bulletIcon={<Icon variant="icon-Chevron-Right" />}
      key="4"
    >
      content
    </AboutApartmentProperty>,
    <AboutApartmentProperty
      bulletIcon={<Icon variant="icon-Chevron-Right" />}
      key="5"
    >
      content
    </AboutApartmentProperty>,
  ],

  title: 'Luxury Apartment*',
  subtitle:
    'Photos, decor and furniture placing may vary depending on the unit booked.',
} as AboutApartmentProps;

Primary.args = args;
