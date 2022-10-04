import React from 'react';

export type CollapsibleContextType = {
  isOpen: boolean;
  onToggle: () => void;
};

export const CollapsibleContext = React.createContext<CollapsibleContextType | undefined>(
  undefined
);

export function useCollapsibleContext() {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error(
      `Collapsible compound components cannot be rendered outside the Collapsible component`
    );
  }
  return context;
}
