import React from 'react'
declare type UseSwipeParams = {
    onScrollLeft: () => void
    onScrollRight: () => void
}
declare type UseSwipeReturningType = {
    handleTouchEnd: (event: React.TouchEvent) => void
    handleTouchStart: (event: React.TouchEvent) => void
    handleTouchMove: (event: React.TouchEvent) => void
}
declare const useSwipe: ({
    onScrollLeft,
    onScrollRight,
}: UseSwipeParams) => UseSwipeReturningType
export default useSwipe
