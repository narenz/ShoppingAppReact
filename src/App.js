import React from 'react';
import Productlist from './Components/Productlist';
import Basket from './Components/Basket';
import products from './Data/ProductListData.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      productsInCart: [],
      productsInventory: products
    };
  }

  onAddToCart(item) {
    const index = this.state.productsInventory.indexOf(item);
    let modifiedItemQuantity = Object.assign(
      {},
      this.state.productsInventory[index],
      { quantity: this.state.productsInventory[index].quantity - 1 })

    this.setState({
      productsInventory: [
        ...this.state.productsInventory.slice(0, index),
        modifiedItemQuantity,
        ...this.state.productsInventory.slice(index + 1)
      ],
      productsInCart: [...this.state.productsInCart, Object.assign({}, item, { id: this.state.productsInCart.length })]
    });
  }

  resetBasket() {
    this.setState({
      productsInCart: [],
      productsInventory: products
    });
  }

  checkoutBasket() {
    this.setState({
      productsInCart: []
    })
  }

  render() {
    return (
      <div>
        <h1>Shopping cart using React</h1>
        <hr />
        <Productlist
          products={this.state.productsInventory}
          onSelected={this.onAddToCart.bind(this)} />
        <hr />
        <Basket
          prodcutsAddedtoBasket={this.state.productsInCart} />
        <button className='resetButton'
          onClick={this.resetBasket.bind(this)}
          disabled={this.state.productsInCart.length > 0 ? '' : 'disabled'}>
          Reset basket
        </button>
        <button className='submitButton'
          onClick={this.checkoutBasket.bind(this)}>
          Checkout
        </button>
      </div>
    )
  }
}

export default App;