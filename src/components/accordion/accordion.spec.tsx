import { render } from '@testing-library/react'
import Accordion from './index'

Accordion
describe('Accordion', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Accordion />)
        expect(baseElement).toBeTruthy()
    })
})
