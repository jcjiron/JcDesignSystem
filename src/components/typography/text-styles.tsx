import { css } from 'styled-components'
import { ScreenSize } from '../hooks/use-screen-size/use-screen-size'

export const SectionTitle = css`
    font-size: 48px;
    line-height: 52px;
    @media (max-width: ${ScreenSize.SMALL}px) {
        font-size: 34px;
        line-height: 36px;
    }
`

export const SectionHeader = css`
    font-size: 32px;
    line-height: 40px;
    @media (max-width: ${ScreenSize.SMALL}px) {
        font-size: 28px;
        line-height: 34px;
    }
`

export const SubSectionHeader = css`
    font-size: 28px;
    line-height: 34px;
    @media (max-width: ${ScreenSize.SMALL}px) {
        font-size: 22px;
        line-height: 28px;
    }
`

export const SubSectionSubHeader = css`
    font-size: 32px;
    line-height: 40px;
    @media (max-width: ${ScreenSize.SMALL}px) {
        font-size: 22px;
        line-height: 28px;
    }
`

export const Title = css`
    font-size: 18px;
    line-height: 20px;
`

export const Default = css`
    font-size: 15px;
    line-height: 20px;
`

export const Small = css`
    font-size: 12px;
    line-height: 24px;
`

export const TypographyStyles = css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: bold;
    }
    h1 {
        font-size: 2rem;
        line-height: 1.2;
    }
    h2 {
        font-size: 1.75rem;
        line-height: 1.2;
    }
    h3 {
        font-size: 1.5rem;
        line-height: 1.4;
    }
    h4 {
        font-size: 1.25rem;
        line-height: 1.4;
    }
    h5 {
        font-size: 1rem;
        line-height: 1.5;
    }
    h6 {
        font-size: 0.875rem;
        line-height: 1.5;
    }
    p {
        font-size: 0.875rem;
        line-height: 1.6;
    }
    .body-default {
        font-size: 1rem;
        line-height: 1.6;
    }
    .body-secondary {
        font-size: 0.875rem;
        line-height: 1.6;
    }
    .body-captions {
        font-size: 0.875rem;
        line-height: 1.8;
    }
    .body-footnotes {
        font-size: 0.75rem;
        line-height: 1.8;
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 768px) {
        h1 {
            font-size: 3rem;
            line-height: 1.2;
        }
        h2 {
            font-size: 2.5rem;
            line-height: 1.2;
        }
        h3 {
            font-size: 2rem;
            line-height: 1.4;
        }
        h4 {
            font-size: 1.5rem;
            line-height: 1.4;
        }
        h5 {
            font-size: 1.25rem;
            line-height: 1.5;
        }
        h6 {
            font-size: 1rem;
            line-height: 1.4;
        }
    }
`
