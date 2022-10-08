import React from 'react'
import { render } from '@testing-library/react'

import { UnitCardPriceItem } from './index'

describe('PriceItem', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <UnitCardPriceItem
                stagingTitle={''}
                pricePerNight={0}
                priceTitle={''}
            />
        )
        expect(baseElement).toBeTruthy()
    })
})
