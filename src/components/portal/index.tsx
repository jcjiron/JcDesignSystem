import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({
  children,
  className,
  el = 'div',
}: {
  children: ReactNode;
  className?: string;
  el?: string;
}): React.ReactPortal => {
  const [container] = React.useState(document.createElement(el));

  container.classList.add(`root-portal`);
  if (className) {
    container.classList.add(className);
  }

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};
