'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var jsx_runtime_1 = require('react/jsx-runtime')
var react_1 = require('@testing-library/react')
var index_1 = require('./index')
describe('PriceItem', function () {
    it('should render successfully', function () {
        var baseElement = (0, react_1.render)(
            (0, jsx_runtime_1.jsx)(index_1.UnitCardPriceItem, {
                stagingTitle: '',
                pricePerNight: 0,
                priceTitle: '',
            })
        ).baseElement
        expect(baseElement).toBeTruthy()
    })
})
