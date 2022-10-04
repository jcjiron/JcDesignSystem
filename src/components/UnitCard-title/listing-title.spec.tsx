import React from 'react';
import { render } from '@testing-library/react';

import UnitCardTitle from './';

describe('UnitCardTitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnitCardTitle />);
    expect(baseElement).toBeTruthy();
  });
});
