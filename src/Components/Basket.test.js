import React from 'react'
import Basket from './Basket'
import ReactTestUtils from 'react-addons-test-utils'

describe('Basket component', () => {
    let mockCartData = [
        { "id": 1, "title": "iPad", "price": 300, "quantity": 1 },
        { "id": 2, "title": "iMac", "price": 100, "quantity": 1 }
    ]
    const basketComponent = ReactTestUtils.renderIntoDocument(<Basket prodcutsAddedtoBasket={mockCartData} />)

    it('contains 2 items when mockCartData is added', () => {
        expect(basketComponent.props.prodcutsAddedtoBasket.length).toEqual(2);
    })

    it('shows the total 400', () => {
        const sumTotal = ReactTestUtils.findRenderedDOMComponentWithClass(basketComponent, 'cartTotal')
        expect(sumTotal.textContent).toEqual('total:400');
    })
})