import { List } from './../../../list/list';
import React, { ReactElement } from 'react';
import { MainFeatureItemProps } from './main-feature-item';

export interface MainFeaturesProps {
  children:
    | ReactElement<MainFeatureItemProps>
    | ReactElement<MainFeatureItemProps>[];
}
export const MainFeatures = ({ children }: MainFeaturesProps) => {
  return (
    <section className="container">
      <List direction="horizontal" className="row">
        {children}
      </List>
    </section>
  );
};
