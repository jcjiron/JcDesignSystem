import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { IconProps } from '../icon';
import { getContrastYIQ } from '../utils/get-contrast-YIQ';
import { Card } from './card';

const backgroundColor = '#1A1A1A';
const StyledFooter = styled.footer`
  background-color: ${() => backgroundColor};
  color: ${() => getContrastYIQ(backgroundColor)};
  padding-bottom: 30px;
  .btn-link {
    font-weight: 400;
    font-size: 9pt;
    color: #f0f0f0;
    &:focus {
      box-shadow: inherit;
    }
  }
  .icon-button {
    color: ${() => getContrastYIQ(backgroundColor)};
    &:hover {
      text-decoration: none;
    }
  }
  .icon {
    font-size: 28pt;
  }

  @media (min-width: 575px) && (max-width: 1199px) {
    .footer-pad {
      padding-left: 180px;
    }
    .links-pad {
      padding-left: 200px;
    }
  }

  @media (min-width: 1200px) {
    .footer-pad {
      padding-left: 30px;
    }
    .links-pad {
      padding-left: 50px;
    }
  }

  @media (max-width: 1200px) {
    .col-2 {
      flex: 100%;
      max-width: 50%;
    }
    .col-3 {
      flex: 100%;
      max-width: 100%;
    }
  }

  @media (max-width: 576px) {
    .icon {
      font-size: 24pt;
    }
  }
`;

const FooterCard = styled(Card)`
  background-color: ${() => backgroundColor};
  .font-bigger {
    font-size: 19pt;
  }
  .card-title {
    font-size: 14pt;
  }
  .card-text {
    font-size: 12pt;
    font-weight: 400;
    color: #f0f0f0;
    a {
      color: #f0f0f0;
    }
  }

  @media (max-width: 767px) {
    .card-body {
      padding-left: 0;
      padding-right: 0;
    }
  }
  @media (max-width: 576px) {
    .card-title {
      font-size: 12pt;
    }
    .card-text {
      font-size: 12pt;
    }
    .font-bigger {
      font-size: 16pt;
    }
  }
`;

interface FooterCardModel {
  title?: string;
  content?: string | ReactElement;
}
interface FooterLinkModel {
  url?: string;
  text?: string;
}
interface FooterIconLink {
  icon: ReactElement<IconProps>;
  url: string;
  key?: string;
}
export type FooterProps = {
  NewsLetterForm?: ReactElement;
  mainText: string | ReactElement;
  cardOne: FooterCardModel;
  cardTwo: FooterCardModel;
  socialIconsOne: FooterIconLink[];
  socialIconsTwo: FooterIconLink[];
  linkOne: FooterLinkModel;
  linkTwo: FooterLinkModel;
  linkThree: FooterLinkModel;
  linkFour: FooterLinkModel;
};

export const Footer = ({
  NewsLetterForm,
  cardOne,
  cardTwo,
  linkOne,
  linkThree,
  linkTwo,
  linkFour,
  mainText,
  socialIconsOne,
  socialIconsTwo,
}: FooterProps) => {
  return (
    <StyledFooter className="container-fluid pt-2 pt-4">
      <div className="footer-pad">
        <div>{NewsLetterForm}</div>
        <div className="row py-2">
          <div className="col-3">
            <FooterCard>
              <div className="card-body">
                <p className="font-weight-bolder font-bigger mb-0 pt-sm-2 pb-sm-3">
                  {mainText}
                </p>
              </div>
            </FooterCard>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-sm-6 py-2">
                <FooterCard>
                  <div className="card-body">
                    <h5 className="card-title">{cardOne?.title}</h5>
                    <p className="card-text ">{cardOne?.content}</p>
                  </div>
                </FooterCard>
              </div>
              <div className="col-sm-6 py-2">
                <FooterCard>
                  <div className="card-body">
                    <h5 className="card-title">{cardTwo?.title}</h5>
                    <p className="card-text ">{cardTwo?.content}</p>
                  </div>
                </FooterCard>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-2 pb-3">
          <div className="col-2">
            <FooterCard>
              <div className="card-body pt-0 d-flex justify-content-between">
                {socialIconsOne &&
                  socialIconsOne.map((button) => {
                    return (
                      <div key={button.key}>
                        <a className="icon-button" href={button.url}>
                          {button?.icon}
                        </a>
                      </div>
                    );
                  })}
              </div>
            </FooterCard>
            <FooterCard>
              <div className="card-body pt-0 d-flex justify-content-between">
                {socialIconsTwo &&
                  socialIconsTwo.map((button) => {
                    return (
                      <div key={button.key}>
                        <a className="icon-button" href={button.url}>
                          {button?.icon}
                        </a>
                      </div>
                    );
                  })}
              </div>
            </FooterCard>
          </div>
        </div>
      </div>
      <div className="row py-2 links-pad">
        <div className="col-md-3 col-sm-6 col-12 py-1 text-left">
          <a href={linkOne?.url} className="btn-link">
            {linkOne?.text}
          </a>
        </div>
        <div className="col-md-3  col-sm-6 col-12  py-1 text-left">
          <a href={linkTwo?.url} className="btn-link">
            {linkTwo?.text}
          </a>
        </div>
        <div className="col-md-3  col-sm-6 col-12  py-1 text-left">
          <a href={linkThree?.url} className="btn-link">
            {linkThree?.text}
          </a>
        </div>
        <div className="col-md-3  col-sm-6 col-12  py-1 text-left">
          <a href={linkFour?.url} className="btn-link">
            {linkFour?.text}
          </a>
        </div>
      </div>
    </StyledFooter >
  );
};
