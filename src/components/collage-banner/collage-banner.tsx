import React, { ReactElement, ReactNode } from 'react'
import styled from 'styled-components'
import { ImageProps } from './../image/Image'

export const BannerButtonStyles = {
    backgroundColor: '#fff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '8px',
    color: '#1A1A1A',
    fontSize: '15px',
    padding: '7px 16px',
}

export type CollageBannerProps = {
    images: [
        ReactElement<ImageProps>,
        ReactElement<ImageProps>,
        ReactElement<ImageProps>,
        ReactElement<ImageProps>,
        ReactElement<ImageProps>
    ]
    children?: ReactNode
}

const Styles = styled.div`
    position: relative;

    .content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 30px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: center;
        div {
            display: flex;
        }
    }
    @media (min-width: 768px) {
        .content {
            position: absolute;
            bottom: 30px;
            left: 50px;
            display: inherit;
        }
    }
    .grid {
        display: grid;
        gap: 15px;
        grid-template-columns: [col1-start] auto [col1-end col2-start];
        grid-template-rows: [row1-start] 250px [row1-end row2-start];
        .item {
            display: none;
            overflow: hidden;
        }

        .main {
            grid-column-start: col1-start;
            grid-column-end: col1-end;
            grid-row-start: row1-start;
            grid-row-end: row2-end;
        }
        .a {
            grid-column-start: col2-start;
            grid-column-end: col2-end;
            grid-row-start: row1-start;
            grid-row-end: row1-end;
        }
        .b {
            grid-column-start: col3-start;
            grid-column-end: col3-end;
            grid-row-start: row1-start;
            grid-row-end: row1-end;
        }
        .c {
            grid-column-start: col2-start;
            grid-column-end: col2-end;
            grid-row-start: row2-start;
            grid-row-end: row2-end;
        }
        .d {
            grid-column-start: col3-start;
            grid-column-end: col3-end;
            grid-row-start: row2-start;
            grid-row-end: row2-end;
        }

        @media (min-width: 576px) {
            grid-template-rows: [row1-start] 400px [row1-end row2-start];
        }
        @media (min-width: 768px) {
            .content {
                position: absolute;
                bottom: 30px;
                left: 50px;
            }
            grid-template-rows: [row1-start] 155px [row1-end row2-start] 155px [row2-end];
            grid-template-columns: [col1-start] auto [col1-end col2-start] 19vw [col2-end col3-start] 19vw [col3-end];
            .item {
                display: inherit;
            }
        }
        @media (min-width: 992px) {
            grid-template-rows: [row1-start] 141px [row1-end row2-start] 141px [row2-end];
            grid-template-columns: [col1-start] auto [col1-end col2-start] 18vw [col2-end col3-start] 18vw [col3-end];
        }
        @media (min-width: 1152px) {
            grid-template-rows: [row1-start] 172px [row1-end row2-start] 172px [row2-end];
        }
        @media (min-width: 1440px) {
            grid-template-rows: [row1-start] 207px [row1-end row2-start] 207px [row2-end];
        }
    }
`

export const CollageBanner = ({
    images: [img1, img2, img3, img4, img5],
    children,
}: CollageBannerProps) => {
    return (
        <Styles>
            <div className="content">
                <div>{children}</div>
            </div>
            <div className="grid">
                <div className="main">{img1}</div>
                <div className="item a">{img2}</div>
                <div className="item b">{img3}</div>
                <div className="item c">{img4}</div>
                <div className="item d">{img5}</div>
            </div>
        </Styles>
    )
}
