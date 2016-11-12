import React from 'react';
import Productlist from './Components/Productlist';
import Basket from './Components/Basket';
import { connect } from 'react-redux';

class App extends React.Component {
  // constructor() {
  //   super();
  //   // this.state = {
  //   //   productsInCart: []
  //   // };
  // }

  componentDidMount() {
    this.props.getProducts();
  }

  onAddToCart(item) {
    //const index = this.props.productsInventory.indexOf(item);
    // let modifiedItemQuantity = Object.assign(
    //   {},
    //   this.props.productsInventory[index],
    //   { quantity: this.props.productsInventory[index].quantity - 1 })

    // this.setState({
    //   // productsInventory: [
    //   //   ...this.state.productsInventory.slice(0, index),
    //   //   modifiedItemQuantity,
    //   //   ...this.state.productsInventory.slice(index + 1)
    //   // ],
    //   productsInCart: [...this.state.productsInCart, Object.assign({}, item, { id: this.state.productsInCart.length })]
    // });
  }

  resetBasket() {
    // this.setState({
    //   productsInCart: [],
    // });
  }

  checkoutBasket() {
    // this.setState({
    //   productsInCart: []
    // })
  }

  render() {
    return (
      <div>
        <h1>Shopping cart using React</h1>
        <hr />
        <Productlist
          products={this.props.productsInventory}
          onSelected={this.onAddToCart.bind(this)} />
        <hr />
        <Basket
          prodcutsAddedtoBasket={this.props.productsInCart} />
        <button className='resetButton'
          onClick={this.resetBasket.bind(this)}
          disabled={this.props.productsInCart.length > 0 ? '' : 'disabled'}>
          Reset App
          </button>
        <button className='submitButton'
          onClick={this.checkoutBasket.bind(this)}>
          Checkout
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsInventory: state.productsInInventoryReducer,
    productsInCart: state.ProductsInBasketReducer
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({
        type: 'FETCH_PRODCTS'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);