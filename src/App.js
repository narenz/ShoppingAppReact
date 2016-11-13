import React from 'react';
import Productlist from './Components/Productlist';
import Basket from './Components/Basket';
import { connect } from 'react-redux';
import * as userActions from './Actions/actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getProducts());
  }

  onAddToCart(item) {
    this.props.dispatch(userActions.addItem(item));
  }

  resetBasket() {
    this.props.dispatch(userActions.resetApp());
  }

  checkoutBasket() {
    this.props.dispatch(userActions.checkout());
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

export default connect(mapStateToProps)(App);