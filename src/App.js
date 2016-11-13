import React from 'react';
import Productlist from './Components/Productlist';
import Basket from './Components/Basket';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.getProducts();
  }

  onAddToCart(item) {
    this.props.addItem(item);
  }

  resetBasket() {
    this.props.resetApp();
  }

  checkoutBasket() {
    this.props.checkout();
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
    productsInventory: state.ProductsReducer.inventory,
    productsInCart: state.ProductsReducer.basket
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      dispatch({ type: 'FETCH_PRODCTS' })
    },
    resetApp: () => {
      dispatch({ type: 'RESET_APP' })
    },
    checkout: () => {
      dispatch({ type: 'CHECKOUT' })
    },
    addItem: (item) => {
      dispatch({
        type: 'ADD_ITEM',
        payload: item
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);