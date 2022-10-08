import React from 'react'

type UseSwipeParams = {
    onScrollLeft: () => void
    onScrollRight: () => void
}

type UseSwipeReturningType = {
    handleTouchEnd: (event: React.TouchEvent) => void
    handleTouchStart: (event: React.TouchEvent) => void
    handleTouchMove: (event: React.TouchEvent) => void
}

const useSwipe = ({
    onScrollLeft,
    onScrollRight,
}: UseSwipeParams): UseSwipeReturningType => {
    const touchStart = React.useRef<number>(0)
    const touchEnd = React.useRef<number>(0)

    const handleTouchStart = (evt: React.TouchEvent) => {
        evt.persist()
        touchStart.current = evt.touches[0].clientX
    }

    const handleTouchMove = (evt: React.TouchEvent) => {
        evt.persist()
        touchEnd.current = evt.touches[0].clientX
    }

    const handleTouchEnd = (evt: React.TouchEvent) => {
        evt.persist()
        if (touchStart.current < touchEnd.current) {
            onScrollRight()
        }

        if (touchStart.current > touchEnd.current) {
            onScrollLeft()
        }
    }

    return {
        handleTouchEnd,
        handleTouchStart,
        handleTouchMove,
    }
}

export default useSwipe
