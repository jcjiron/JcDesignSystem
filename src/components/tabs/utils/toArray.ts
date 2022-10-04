import React from 'react';

export default function toArray(
  children: React.ReactNode
): React.ReactElement[] {
  let ret: React.ReactElement[] = [];

  React.Children.forEach(children, (child: React.ReactElement) => {
    if (!child) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else {
      ret.push(child);
    }
  });

  return ret;
}
