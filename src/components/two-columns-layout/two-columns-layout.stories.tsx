import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TwoColumnsLayout, TwoColumnsLayoutProps } from './';

export default {
  title: 'Example/Two Columns Layout',
  component: TwoColumnsLayout,
} as Meta;

const Template: Story<TwoColumnsLayoutProps> = ({
  ...args
}: TwoColumnsLayoutProps) => (
  <TwoColumnsLayout style={{ height: 400 }}>
    <TwoColumnsLayout.StaticColumn style={{ padding: 16 }}>
      <h2>Location</h2>
      <p>Roma Norte, México City</p>
      <p>
        Roma: Mexico City’s go-to district for the creative and cool. Here you
        will find a slew of unique, locally-run coffee shops, art galleries,
        trendy hole-in-the-wall bars and no-frills taquerías filled with trendy
        locals.
      </p>
      <p>Want an even more curated experience?</p>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        Visit our blog
      </a>
    </TwoColumnsLayout.StaticColumn>
    <TwoColumnsLayout.ScrollableColumn>
      <h2>Unit location</h2>
      <p style={{ fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.5)' }}>
        Exact location provided after booking.
      </p>
      <img
        style={{ width: '100%' }}
        src="https://res.cloudinary.com/dme8prhq8/image/upload/v1623094542/map.png"
        alt="map"
      />
      <h2>Neighborhood</h2>
      <img
        style={{ width: '100%' }}
        src="https://res.cloudinary.com/dme8prhq8/image/upload/v1623094621/Frame_55_sog8nh.png"
        alt="Neighborhood"
      />
    </TwoColumnsLayout.ScrollableColumn>
  </TwoColumnsLayout>
);

export const Primary = Template.bind({});

Primary.args = {} as TwoColumnsLayoutProps;
