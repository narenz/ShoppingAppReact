import React from 'react'
import ProductItem from './ProductItem'
import ReactTestUtils from 'react-addons-test-utils'

describe("ProductItem component", () => {
  let mockData = { id: 1, title: "iPad", price: 300, quantity: 1 };
  let addToBasketCallback = (item) => expect(item.title).toBe("iPad");
  const productComponent = ReactTestUtils.renderIntoDocument(<ProductItem product={mockData} onAddToCartClicked={addToBasketCallback} />)

  it('is a react component', () => {
    expect(ReactTestUtils.isCompositeComponent(productComponent)).toBeTruthy;
  });

  it('when clicked returns the details of the product', () => {
    const buttonElement = ReactTestUtils.findRenderedDOMComponentWithTag(productComponent, 'button')
    ReactTestUtils.Simulate.click(buttonElement);
  });

  it('when rendered shows the right text', () => {
    const mainText = ReactTestUtils.findRenderedDOMComponentWithTag(productComponent, 'span');
    expect(mainText.textContent).toEqual('iPad => 300 X 1');
  });

  it('when inventory is 0 button is disabled', () => {
    let mockDataNoQuantity = { id: 1, title: "iPad", price: 0, quantity: 0 };
    const mockproductComponent = ReactTestUtils.renderIntoDocument(<ProductItem product={mockDataNoQuantity} />)
    const buttonElement1 = ReactTestUtils.findRenderedDOMComponentWithTag(mockproductComponent, 'button')
    expect(buttonElement1.disabled).toBeTruthy;
  })
})