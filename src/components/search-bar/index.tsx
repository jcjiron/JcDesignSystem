import React from 'react'
import styled from 'styled-components'
import Button from '../button'

type SeachBarProps = {
    children: React.ReactNode
    shrink?: boolean
    onSearchClick?: () => void
    className?: string
    style?: React.CSSProperties
    searchButtonLabel?: string
}

const StyledContainer = styled.div`
    background-color: white;
    height: 60px;
    border-radius: 30px;
    width: fit-content;
    border: 1px solid #ebebeb;
`

const StyledButton = styled(Button)`
    border: none;
    &.btn {
        margin: 2px 2px 2px 0px;
        padding-left: 24px;
        padding-right: 24px;
        border-radius: 30px;
        width: fit-content;
        height: initial;
    }
    &:focus {
        border: 2px solid var(--jet);
    }

    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) {
        &.btn {
            margin: 2px 2px 2px 16px;
        }
    }
`

const SearchBar = ({
    children,
    shrink,
    onSearchClick,
    className,
    style,
    searchButtonLabel = 'Search',
}: SeachBarProps) => {
    const getFirstChild = (children) => {
        const childrenArray = React.Children.toArray(children)
        return childrenArray.length > 0 ? childrenArray[0] : null
    }

    return (
        <StyledContainer className={`${className} p-0 d-flex`} style={style}>
            {shrink ? getFirstChild(children) : children}
            <StyledButton onClick={onSearchClick}>
                <span>{searchButtonLabel}</span>
            </StyledButton>
        </StyledContainer>
    )
}

export default SearchBar
