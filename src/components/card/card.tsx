import React from 'react';
import '../../../assets/styles/bootstrap/carousel.scss';
import styled from 'styled-components';
import { FadeCarousel } from '../carousel/Carousel';
import CarouselControls from '../carousel/CarouselControls';
import { CardImage } from '.';
import { CardCapacity } from './card-capacity';
import { CardTitle } from './card-title';
import { CardPrice } from './card-price';
import { CardLocation } from './card-location';
import { CardNotes } from './card-notes';
import { CardLabel } from './card-label';
import { CardDates } from './card-dates';
import { CardNightTitle } from './card-night-title';

export type CardProps = {
  interval?: number;
  images: CardImage[];
  texts?: CardTextsModel;
  children?: React.ReactNode;
  withControls?: boolean;
  variant?: 'dark' | 'light';
  onChangeSlide?: (index: number) => void;
} & React.ComponentPropsWithoutRef<'div'>;

interface CardTextsModel {
  label?: string;
  dates?: string;
  capacity: string;
  notes?: string;
  price: string;
  title: string;
  location: string;
  night: string;
  moreOptions?: string;
}

const StyledCarousel = styled.div`
  &.dark {
    .card {
      background-color: var(--dark-bg);
    }
    .night-text {
      color: var(--truewhite);
    }
  }
  &.light {
    .card {
      background-color: var(--truewhite);
    }
    .night-text {
      color: var(--primary-800);
    }
  }
  .card {
    width: 350px;
    height: 350px;
    box-shadow: 0px 1px 2px rgba(18, 21, 27, 0.1),
      0px 2px 4px rgba(18, 21, 27, 0.15);
    border-radius: 8px;
    border: none;
  }
  .carousel-inner {
    border-radius: 8px 8px 0px 0px !important;
  }
  .preferences-reservation {
    display: flex;
    margin: 16px 0px 0px 1px;
    justify-content: space-between;
  }
  .reservation-title,
  .reservation-location {
    margin-left: 1px;
  }
  .reservation-location {
    margin-bottom: 16px;
    align-items: baseline;
  }
  .reservation-notes {
    display: flex;
    justify-content: space-between;
    margin-left: 1px;
    margin-right: 1px;
  }
  .reservation-capacity {
    margin-top: 16px;
  }
  .night-text {
    font-size: 14px;
    line-height: 22px;
    font-weight: 500;
    margin-left: 5px;
  }
  .carousel-control-container {
    margin-top: -120px;
  }
  .images-container {
    position: relative;
  }
  .top-components {
    margin: 16px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
  }
  .bottom-components {
    position: absolute;
    z-index: 2;
    margin: 0 0 14px 16px;
    bottom: 0;
  }
`;

const Card = ({
  interval = 3500,
  images,
  texts,
  children,
  withControls,
  className,
  variant,
  onChangeSlide,
  ...props
}: CardProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (onChangeSlide) {
      onChangeSlide(activeIndex);
    }
  }, [activeIndex]);

  return (
    <StyledCarousel className={`${variant}`} {...props}>
      <div className="card">
        <div className="images-container">
          <FadeCarousel activeIndex={activeIndex} images={images} />
          <div className="top-components row">
            {texts.label && <CardLabel children={`${texts.label}`}></CardLabel>}
            {/*{<FavoriteButton></FavoriteButton>}*/}
          </div>
          <div className="bottom-components row">
            {texts.dates && (
              <CardDates
                children={`${texts.dates}`}
                moreOptions={texts.moreOptions}
                variant={variant}
              />
            )}
          </div>
        </div>
        <div className="carousel-content">
          {withControls ? (
            <CarouselControls
              itemsLength={images.length}
              setActiveIndex={setActiveIndex}
            />
          ) : null}
          {children ? <div className="children-content">{children}</div> : null}
        </div>
        <div className="container d-flex flex-column footer-card-listing">
          <div className="reservation-capacity">
            <CardCapacity
              children={`${texts.capacity}`}
              variant={variant}
            ></CardCapacity>
          </div>
          <span className="reservation-title row">
            <CardTitle
              children={`${texts.title}`}
              variant={variant}
            ></CardTitle>
          </span>
          <span>
            <CardLocation
              children={`${texts.location}`}
              variant={variant}
            ></CardLocation>
          </span>
          {texts.notes && (
            <span>
              <CardNotes children={`${texts.notes}`}></CardNotes>
            </span>
          )}
          <div className="reservation-location row">
            <div className="reservation-price">
              <CardPrice
                children={`${texts.price}`}
                variant={variant}
              ></CardPrice>
            </div>
            <span className="night-text">
              <CardNightTitle
                children={`${texts.night}`}
                variant={variant}
              ></CardNightTitle>
            </span>
          </div>
        </div>
      </div>
    </StyledCarousel>
  );
};

export default Card;
