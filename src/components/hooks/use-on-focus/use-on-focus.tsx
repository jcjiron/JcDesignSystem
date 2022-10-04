import React from 'react';
import { getBrowserName } from './utils/browser';

type useFocusOutReturnType = {
  onBlurHandler: () => void;
  onFocusHandler: () => void;
  listeningRef: React.MutableRefObject<undefined>;
};

type useFocusOutParams = {
  onFocusOut?: () => void;
  onFocusIn?: () => void;
};

function useOnFocus({
  onFocusOut,
  onFocusIn,
}: useFocusOutParams): useFocusOutReturnType {
  const timeOutId = React.useRef<number>();
  const userAgent = getBrowserName();
  const isSafari = userAgent === 'Apple Safari';
  const isFirefox = userAgent === 'Mozilla Firefox';

  const isUnsupportedBrowser = isFirefox || isSafari;

  const listeningRef = React.useRef(null);

  const handleClickOutside = (e) => {
    if (!listeningRef?.current?.contains(e.target)) {
      onFocusOut();
    }
  };

  React.useEffect(() => {
    if (isUnsupportedBrowser) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      if (isUnsupportedBrowser) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    };
  });

  // We close the popover on the next tick by using setTimeout.
  // This is necessary because we need to first check if
  // another child of the element has received focus as
  // the blur event fires prior to the new focus event.
  function onBlurHandler() {
    if (isUnsupportedBrowser) return;
    timeOutId.current = setTimeout(() => {
      if (onFocusOut) {
        onFocusOut();
      }
    });
  }

  // If a child receives focus, do not close the popover.
  function onFocusHandler() {
    if (isUnsupportedBrowser) return;
    clearTimeout(timeOutId.current);
    if (onFocusIn) {
      onFocusIn();
    }
  }

  return {
    onBlurHandler,
    onFocusHandler,
    listeningRef,
  };
}

export default useOnFocus;
