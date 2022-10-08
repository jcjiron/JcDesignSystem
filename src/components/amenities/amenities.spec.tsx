import React from 'react'
import { render } from '@testing-library/react'

import { Amenities } from './amenities'
import Button from '../button/index'

describe('Amenities', () => {
    it('should render successfully', () => {
        const { baseElement } = render(
            <Amenities images={[]} Button={<Button />} />
        )
        expect(baseElement).toBeTruthy()
    })
})
