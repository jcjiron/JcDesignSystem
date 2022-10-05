import { ReactElement } from 'react';
import { MainFeatureItemProps } from './main-feature-item';
export interface MainFeaturesProps {
    children: ReactElement<MainFeatureItemProps> | ReactElement<MainFeatureItemProps>[];
}
export declare const MainFeatures: ({ children }: MainFeaturesProps) => JSX.Element;
