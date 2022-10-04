import React from 'react';
import { render } from '@testing-library/react';

import { UnitCardPriceItem } from './index';

describe('PriceItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnitCardPriceItem />);
    expect(baseElement).toBeTruthy();
  });
});
