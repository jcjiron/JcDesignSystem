import { useEffect, useState } from 'react';

export const useScreenWidth = () => {
    const [widthSize, setWidthSize] = useState(window.innerWidth);
    const handleResize = () => {
        const size = window.innerWidth;
        setWidthSize(size);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return widthSize;
}