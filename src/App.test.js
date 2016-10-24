import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestUtils from 'react-addons-test-utils'

describe("App component", () => {
  const appElement = ReactTestUtils.renderIntoDocument(<App />)
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('initiates to the 3 productlist', () => {
    expect(appElement.state.productsInventory.length).toBe(3);
  })

  it('disables the checkout button when cart is empty', () => {
    const buttonElement = ReactTestUtils.findRenderedDOMComponentWithClass(appElement, 'resetButton')
    expect(buttonElement.disabled).toBeTruthy;
    expect(appElement.state.productsInCart.length).toEqual(0);
  })
})
