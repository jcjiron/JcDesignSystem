import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { HomeAmenitites, HomeAmenititesProps } from "./home-amenities";
import { AmenityImage } from "./amenities";

export default {
  title: "Example/HomeAmenitites",
  component: HomeAmenitites,
} as Meta;

const CDN_URL = "https://d1l56s2phyyu51.cloudfront.net";

const data: AmenityImage[] = [
  {
    src: `${CDN_URL}/img/hero-1.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-1.jpg`,
    amenitieTitle: "High Speed WiFi",
    thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    alt: "Watch your favorite series & make important work calls at ease.",
  },
  {
    src: `${CDN_URL}/img/hero-2.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-2.jpg`,
    thumbnail: `${CDN_URL}/img/thumbnail/hero-2.webp`,
    amenitieTitle: "Beautiful Workspaces",
    alt: "Thrive remotely, turn your casai in the perfect home-office",
  },
  {
    src: `${CDN_URL}/img/hero-3.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-3.jpg`,
    thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    amenitieTitle: "Keyless access",
    alt: "Never worry about losing your keys with our keycodes access.",
  },
  {
    src: `${CDN_URL}/img/hero-1.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-1.jpg`,
    amenitieTitle: "Equipped kitchens",
    thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    alt: "Have some guests over & cook delicious meals at home.",
  },
  {
    src: `${CDN_URL}/img/hero-2.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-2.jpg`,
    thumbnail: `${CDN_URL}/img/thumbnail/hero-2.webp`,
    amenitieTitle: "Professional cleaning",
    alt: "Enjoy the highest security & cleaning standards in town.",
  },
  {
    src: `${CDN_URL}/img/hero-3.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-3.jpg`,
    thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    amenitieTitle: "Spa-grade towels",
    alt: "Our towels were carefully selected with your comfort in mind.",
  },
  {
    src: `${CDN_URL}/img/hero-2.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-2.jpg`,
    thumbnail: `${CDN_URL}/img/thumbnail/hero-2.webp`,
    amenitieTitle: "Fresh linens",
    alt: "Enjoy a great night of sleep with our egyptian cotton liens.",
  },
  {
    src: `${CDN_URL}/img/hero-3.webp`,
    fallbackSrc: `${CDN_URL}/img/hero-3.jpg`,
    thumbnail: `${CDN_URL}/img/thumbnail/hero-1.webp`,
    amenitieTitle: "Sanitary kit",
    alt: "Enjoy a great night of sleep with our egyptian cotton linens",
  },
];

const Template: Story<HomeAmenititesProps> = ({
  ...props
}: HomeAmenititesProps) => <HomeAmenitites {...props} />;

export const Primary = Template.bind({});

Primary.args = {};
