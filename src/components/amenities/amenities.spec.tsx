import React from 'react';
import { render } from '@testing-library/react';

import Amenities from './amenities';

describe('Amenities', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Amenities />);
    expect(baseElement).toBeTruthy();
  });
});
