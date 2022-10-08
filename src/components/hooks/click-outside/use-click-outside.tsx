import { useState, useRef, useEffect } from 'react'

type useClickOutside = {
    handleClickInside: () => void
    clickedOutside: boolean
    listeningRef: React.MutableRefObject<undefined>
}
export const useClickOutside = (): useClickOutside => {
    const [clickedOutside, setClickedOutside] = useState(false)
    const listeningRef = useRef(null)
    const handleClickOutside = (e) => {
        if (!listeningRef?.current?.contains(e.target)) {
            setClickedOutside(true)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    })
    const handleClickInside = () => setClickedOutside(false)

    return {
        handleClickInside,
        clickedOutside,
        listeningRef,
    }
}
