import { useEffect, useState } from 'react';

export enum ScreenSize {
  SMALL = 576,
  MEDIUM = 768,
  LARGE = 992,
  EXTRA_LARGE = 1200,
}

const getIsMobile = (size: number): boolean => {
  return size < ScreenSize.MEDIUM;
};

const getIsTablet = (size: number): boolean => {
  return (
    size >= ScreenSize.MEDIUM &&
    size < ScreenSize.EXTRA_LARGE
  );
};

export type ScreenType = 'Mobile' | 'Desktop' | 'Tablet';

const getTypeOfScreen = (size: number): ScreenType => {
  const isMobile = getIsMobile(size);
  const isTablet = getIsTablet(size);
  if (isMobile) {
    return 'Mobile';
  } else if (isTablet) {
    return 'Tablet';
  }
  return 'Desktop';
};

function useScreenSize(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>(
    getTypeOfScreen(window.innerWidth)
  );

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function handleResize() {
    const size = window.innerWidth;
    setScreenType(getTypeOfScreen(size));
  }

  return screenType;
}

export default useScreenSize;
