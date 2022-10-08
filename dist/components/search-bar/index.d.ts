import React from 'react'
declare type SeachBarProps = {
    children: React.ReactNode
    shrink?: boolean
    onSearchClick?: () => void
    className?: string
    style?: React.CSSProperties
    searchButtonLabel?: string
}
declare const SearchBar: ({
    children,
    shrink,
    onSearchClick,
    className,
    style,
    searchButtonLabel,
}: SeachBarProps) => JSX.Element
export default SearchBar
