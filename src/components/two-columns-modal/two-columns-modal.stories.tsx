import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TwoColumnsLayout, TwoColumnsLayoutProps } from '../two-columns-layout';
import { TwoColumnsModal, TwoColumnsModalProps } from './index';
import Button from '../button';

export default {
  title: 'Example/Two Columns Modal',
  component: TwoColumnsLayout,
} as Meta;

const LocationInfo = () => {
  return (
    <div>
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
    </div>
  );
};

const LocationMap = () => {
  return (
    <div>
      <h2>Unit location</h2>
      <p style={{ fontStyle: 'italic', color: 'rgba(0, 0, 0, 0.5)' }}>
        Exact location provided after booking.
      </p>
      <img
        style={{ width: '100%' }}
        src="https://res.cloudinary.com/dme8prhq8/image/upload/v1623094542/map.png"
        alt="map"
      />
      <h2 className="mt-4">Neighborhood</h2>

      <p>
        Sed voluptatibus provident consequatur. Atque voluptatem nostrum dolorem
        suscipit quis repudiandae nihil maiores vero. Qui et labore numquam
        officia dolor. Qui amet enim autem debitis. Quisquam quisquam labore id
        aut aliquid tempore hic repudiandae.
      </p>

      <p>
        Impedit beatae nihil aspernatur aut. Asperiores odio repudiandae
        quibusdam velit. Eos voluptatem eius repellat autem sit sit illum eum.
        Eaque nihil omnis aut deserunt magnam quia aut nulla. Eum non inventore
        a. Ea commodi reiciendis autem.
      </p>

      <p>
        Dolor enim sequi. Optio neque est nihil. Explicabo dolorem ea ea omnis
        quia adipisci doloremque blanditiis. Sit voluptas exercitationem omnis
        veniam eius veniam id nemo.
      </p>

      <img
        style={{ width: '100%' }}
        src="https://res.cloudinary.com/dme8prhq8/image/upload/v1623094621/Frame_55_sog8nh.png"
        alt="Neighborhood"
      />
    </div>
  );
};

const Template: Story<TwoColumnsLayoutProps> = ({
  ...args
}: TwoColumnsLayoutProps) => {
  const [showModal, setShowModal] = React.useState(true);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Button onClick={openModal}>{showModal ? 'Close ' : 'Open '}Modal</Button>
      <TwoColumnsModal
        show={showModal}
        onClose={closeModal}
        onGoBack={closeModal}
        staticColumn={<LocationInfo />}
        scrollableColumn={<LocationMap />}
      />
    </div>
  );
};

export const Primary = Template.bind({});

Primary.args = {} as TwoColumnsLayoutProps;
