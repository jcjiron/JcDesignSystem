import React, {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ModalPopup, ModalPopupProps } from './modal-popup';
import { Heading, Text } from '../typography';
import { Icon } from '../icon';
import { ModalScrollableContent } from './modal-scrollable-container';

export default {
  title: 'Example/ModalPopup',
  component: ModalPopup,
} as Meta;

const Content = (props: ComponentPropsWithoutRef<'div'>) => (
  <div {...props} className="p-5">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor si cct amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
      euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
      scelerisque felis, sed luctus nibh suscipit placerat.
    </p>
  </div>
);

const Template: Story<ModalPopupProps> = ({
  children,
  ...args
}: ModalPopupProps) => {
  const [show, setShow] = useState(args.show);
  const handleShow = () => setShow(!show);

  useEffect(() => {
    if (show !== args.show) {
      setShow(args.show);
    }
  }, [args.show]);

  return (
    <>
      <button onClick={handleShow}>Open Modal</button>
      <ModalPopup
        {...args}
        show={show}
        closeModal={handleShow}
        actionBar={<span>Close</span>}
      >
        {children}
      </ModalPopup>
    </>
  );
};

export const Primary = Template.bind({});
const args = {
  children: (
    <div
      style={{
        maxWidth: '400px',
      }}
      className="p-5"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam
        euismod, tristique ligula id, pellentesque dolor. Proin pellentesque
        scelerisque felis, sed luctus nibh suscipit placerat.
      </p>
    </div>
  ),
  show: false,
} as ModalPopupProps;

Primary.args = args;

const ModalOne = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(args.show);
  const handleShow = () => setShow(!show);

  useEffect(() => {
    if (show !== args.show) {
      setShow(args.show);
    }
  }, [args.show]);
  return (
    <>
      <button onClick={handleShow}>Open Modal</button>
      <ModalPopup
        {...args}
        show={show}
        closeModal={handleShow}
        actionBar={<span>Close</span>}
      >
        {children}
      </ModalPopup>
    </>
  );
};
const ModalTwo = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(args.show);
  const handleShow = () => setShow(!show);

  useEffect(() => {
    if (show !== args.show) {
      setShow(args.show);
    }
  }, [args.show]);
  return (
    <>
      <button onClick={handleShow}>Open Modal</button>
      <ModalPopup
        {...args}
        show={show}
        closeModal={handleShow}
        actionBar={<span>Close</span>}
      >
        {children}
      </ModalPopup>
    </>
  );
};

export const WithLargeContent = ({ children, ...args }: ModalPopupProps) => {
  const [show, setShow] = useState(args.show);
  const handleShow = () => setShow(!show);

  useEffect(() => {
    if (show !== args.show) {
      setShow(args.show);
    }
  }, [args.show]);
  return (
    <>
      <button onClick={handleShow}>Open Modal</button>
      <ModalPopup
        {...args}
        show={show}
        closeModal={handleShow}
        actionBar={<span>Close</span>}
      >
        {children}
      </ModalPopup>
      <p>Please scroll to bottom!!</p>
      <Content />
      <ModalTwo children={children} />
    </>
  );
};
const textContent =
  '-> Check-in from 3:00 pm & Check-out until 11:00 am (we offer flexible check-in and check-out options subject to availability and the payment of an additional fee).\n\n\n-> Self-check-in via Smart Lock, keyless and contactless. \n\n\n-> Smoking is strictly forbidden on all areas (including balconies).\n\n\n-> Parties aren’t permitted inside our apartments but don’t worry, you can still host visits of groups of up to five people during your stay. Just remember that any visitors (including staff) must present an ID upon entering the building. In case you need more invites, please contact the concierge for availability. \n\n\n-> Be a good neighbor: Bring down the noise to a minimum between 10:00 pm and 6:00 am.\n\n\n-> Building and common areas: Each building might have its specifications, contact concierge for specific details, and opening hours in case you didn’t receive them before.\n\n\n-> Pet-friendly apartments: We know that pets are part of the family. Although not all units are pet-friendly, we are more than happy to have them as our guests in the ones that are.  We charge an additional fee for the deep cleaning process after your check-out, to ensure other guests also have an amazing experience. \n\n-> We kindly ask you to not take with you any item from the apartment, including equipment, decor objects, and linens. But feel free to get the snacks and bath products, this is our special gift for a better experience during your stay!\n\n-> Did something break or went missing during your stay? Accidents happen to all of us and we’re sure we can work things out. Please contact us in case of broken or missing items so we can inform you about the specific fees and procedures. \n\n-> Stays above 7 days: We kindly ask you to water the plants once the soil starts to become dry. They need your love to continue to provide a fresh and lively environment!\n\n-> Personal belongings and valuables brought into the building are solely the responsibility of the guest. We, therefore, aren’t responsible for any loss or damage to luggage or personal belongings that are stored inside our apartments and facilities. If after your departure, you believe you forgot something of your belonging inside one of our units, please contact us so we can help you locate it. \n\n-> Attention: It’s forbidden to manipulate the fire alarm or smoking systems, we also don’t allow guns of any type inside the building. The non-compliance to these rules is subject to a penalty fee.\n\nKeep in mind that non-compliance to these guidelines might result in additional charges or even the cancellation of your booking. Please check our Terms & Conditions for more details.\n\nLuggage Drop Guidelines:\n\n-> Baggage drop services are only available in selected units. Please contact the concierge for specific details about your unit.\n\n-> For your check-in or check-out, you can leave your luggage in Casai for up to 8 hours. Your luggage will be stored by us and you will receive a ticket that must be used to get your luggage again.\n\n-> Luggage drop is available only for Casai guests.\n\n-> Please keep in mind that you are the only one responsible for your personal items. Casai can’t be held responsible for any loss or damage to your belongings and luggage during your stay.\n';

const args2 = {
  children: (
    <ModalScrollableContent
      style={{
        maxWidth: '550px',
      }}
      className="px-5"
    >
      <Heading variant="h3" className="mb-3">
        houseRulesTitle
      </Heading>
      <div className=" ml-3  ">
        <div className="mb-2">
          <Icon className="mr-3" variant="icon-Check-in" />
          <Text variant="span">text 1</Text>
        </div>

        <div className="mb-2">
          <Icon className="mr-3" variant="icon-Check-out" />
          <Text variant="span">text 2</Text>
        </div>

        <Text
          className="mb-3 check-time-note font-italic"
          variant="paragraph"
          size="small"
        >
          small text
        </Text>

        <div
          style={{
            whiteSpace: 'pre-wrap',
          }}
        >
          {textContent}
        </div>
      </div>
    </ModalScrollableContent>
  ),
  show: false,
} as ModalPopupProps;

WithLargeContent.args = args2;
